import { CohereEmbeddings } from "@langchain/cohere";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { createClient } from "@supabase/supabase-js";

const client = createClient(
  process.env.SUPABASE_PROJECT_URL || "",
  process.env.SUPABASE_API_KEY || ""
);

const cohereEmbeddingModel = new CohereEmbeddings({
  apiKey: process.env.COHERE_API_KEY || "",
  batchSize: 48,
});

const vectorStore = new SupabaseVectorStore(cohereEmbeddingModel, {
  client,
  tableName: "documents",
  queryName: "match_documents",
});
const retriever = vectorStore.asRetriever(5);

export { retriever };
