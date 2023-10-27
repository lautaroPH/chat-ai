import { supabase } from '@/supabaseClient';
import { OPENAI_API_KEY } from '@/config';
import { PromptTemplate } from 'langchain/prompts';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { LLMChain } from 'langchain/chains';
import { LangChainStream, StreamingTextResponse } from 'ai';
import { CallbackManager } from 'langchain/callbacks';
import { OpenAI } from 'langchain';

export const runtime = 'edge';

export default async function handler(req, res) {
  const { messages, userId, question, city } = await req.json();

  if (!messages || !city)
    return new Response('Missing prompt', { status: 400 });
  const { stream, handlers } = LangChainStream();

  const INQUIRY_TEMPLATE = `Given the following user prompt and conversation log, formulate a question that would be the most relevant to provide the user with an answer from a knowledge base.
  You should follow the following rules when generating and answer:
  - Always prioritize the user prompt over the conversation log.
  - Ignore any conversation log that is not directly related to the user prompt.
  - Only attempt to answer if a question was posed.
  - The question should be a single sentence
  - You should remove any punctuation from the question
  - You should remove any words that are not relevant to the question
  - If you are unable to formulate a question, respond with the same USER PROMPT you got.

  USER PROMPT: {userPrompt}

  CONVERSATION LOG: {conversationHistory}

  Final answer:
  `;

  const QA_PROMPT = `You are a travel advisor for Chenkster. Your expertise lies in providing insights about places to visit in ${city}. If someone asks about another city, kindly inform them that your knowledge is specific to ${city}, but you're more than happy to share travel tips and hidden gems about this city.

  Primary Data Source: Always prioritize using {context}. If the user's request aligns with this data, use it first.
  
  URLs: When referencing places from the given data, create URLs like this: [Place Name](https://www.chenkster.xyz/[cityName]/categories/[categoryName]/itineraries/[placeName]?realTitle=[placeName]). Only generate such URLs when pulling from the provided data.
  
  Response Format: Your answers should be in Markdown. If you're using your own database for information, don't include a URL.
  
  Tone & Style: Keep it cool and casual. Respond like a human. Be proactive and suggest knowledgeable tidbits about the city from your database.
  
  Itinerary Creation: If a user asks, create an itinerary tailored to their needs.
  
  Preference: Always lean towards the provided data. If it doesn't meet the user's needs, then recommend places based on your judgment.
  
  Number of Suggestions: If a user doesn't specify the number of suggestions they want, always provide two options.

  CONVERSATION LOG: {conversationHistory}

Question: {question}
=========
{context}
=========
`;

  const inquiryChain = new LLMChain({
    llm: new OpenAI({
      openAIApiKey: OPENAI_API_KEY,
    }),
    prompt: new PromptTemplate({
      template: INQUIRY_TEMPLATE,
      inputVariables: ['userPrompt', 'conversationHistory'],
    }),
  });
  const inquiryChainResult = await inquiryChain.call({
    userPrompt: question,
    conversationHistory: messages,
  });
  const inquiry = inquiryChainResult.text;

  const store = new SupabaseVectorStore(
    new OpenAIEmbeddings({
      openAIApiKey: OPENAI_API_KEY,
    }),
    {
      client: supabase,
      tableName: 'documents',
      queryName: 'match_documents',
    },
  );

  const queryResult = await store.similaritySearch(inquiry, 3);

  const content = Array.from(queryResult)
    .map((result) => result.pageContent)
    .join('\n');

  const chat = new ChatOpenAI({
    modelName: 'gpt-3.5-turbo',
    openAIApiKey: OPENAI_API_KEY,
    temperature: 0,
    frequencyPenalty: 1,
    streaming: true,
    callbackManager: CallbackManager.fromHandlers(handlers),
  });

  const promptTemplate = new PromptTemplate({
    template: QA_PROMPT,
    inputVariables: ['context', 'question', 'conversationHistory'],
  });

  const chain = new LLMChain({
    prompt: promptTemplate,
    llm: chat,
  });

  chain.call({
    context: content,
    question,
    conversationHistory: messages,
  });

  return new StreamingTextResponse(stream);
}
