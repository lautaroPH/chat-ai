import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

export async function splitDocsIntoChunks(docs) {
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 2000,
    chunkOverlap: 200,
  });

  return await textSplitter.splitDocuments(docs);
}
