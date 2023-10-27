import { OPENAI_API_KEY } from '@/config';
import { Document } from 'langchain/document';
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { splitDocsIntoChunks } from '@/utils/splitDocsIntoChunks';
import { getCategoryById } from '../get/getCategoryById';
import { getSubCategoryById } from '../get/getSubCategoryById';

export const uploadDocumentsChat = async ({ data, supabase }) => {
  const categoriesPromises = data.categories.map(async (categoryId) => {
    const { categoryTitle } = await getCategoryById(categoryId);

    return categoryTitle;
  });

  const categories = await Promise.all(categoriesPromises);

  const subCategoriesPromises = data.sub_categories.map(
    async (subCategoryId) => {
      const { data } = await getSubCategoryById(subCategoryId);

      return data.title;
    },
  );

  const subCategories = await Promise.all(subCategoriesPromises);

  const pageContent = `
City: ${data.city.title}
Title: ${data.title}
Budget: ${data.budget}
Street: ${data.street}
Map Link: ${data.map_url}
Categories: ${categories.join(', ')}
Description: ${data.description}
Instagram: ${data.social_media}
Visit Period: ${data.visit_period}
Sub-Categories: ${subCategories.join(', ')}
`;

  try {
    const rawDocs = [
      new Document({
        pageContent,
        metadata: {
          ...data,
          city: data.city.title,
          categories,
          sub_categories: subCategories,
        },
      }),
    ];
    //split docs into chunks for openai context window
    const docs = await splitDocsIntoChunks(rawDocs);

    const modifiedDocs = docs.map((doc) => ({
      pageContent: doc.pageContent,
      metadata: doc.metadata,
    }));

    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: OPENAI_API_KEY,
    });

    const store = new SupabaseVectorStore(embeddings, {
      client: supabase,
      tableName: 'documents',
    });

    await store.addDocuments(modifiedDocs);
  } catch (error) {
    console.log('error occured:', error);
  }
};
