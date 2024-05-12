import { CohereEmbeddings } from "@langchain/cohere";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { OpenAIEmbeddings } from "@langchain/openai";
import { createClient } from "@supabase/supabase-js";
import { JSONLoader } from "langchain/document_loaders/fs/json";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

type Data = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const jsonFilePath = path.resolve(
        process.cwd(),
        "pages",
        "api",
        "embedding",
        "data",
        "workExperience.json"
      );
      const loader = new JSONLoader(jsonFilePath);

      const docs = await loader.load();

      const client = createClient(
        process.env.SUPABASE_PROJECT_URL || "",
        process.env.SUPABASE_API_KEY || ""
      );

      const openaiEmbeddingModel = new OpenAIEmbeddings();

      const cohereEmbeddingModel = new CohereEmbeddings({
        apiKey: process.env.COHERE_API_KEY || "",
        batchSize: 48,
      });

      await SupabaseVectorStore.fromDocuments(docs, cohereEmbeddingModel, {
        client,
        tableName: "documents",
      });

      res.status(200).json({
        status: "success",
      });
    } catch (e) {
      console.log(e);
    }
  } else if (req.method === "GET") {
    res.status(200).json({ status: "GET request to /api/embedding/generate" });
  }
}

// package.json
// "overrides": {
//     "@langchain/core": "0.1.5"
//   }
