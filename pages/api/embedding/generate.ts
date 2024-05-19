import { CohereEmbeddings } from "@langchain/cohere";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { OpenAIEmbeddings } from "@langchain/openai";
import { createClient } from "@supabase/supabase-js";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import type { NextApiRequest, NextApiResponse } from "next";
import { aboutMeText } from "./data/aboutMe";
import { projectsText } from "./data/projects";
import { workExperienceText } from "./data/workExperience";

type Data = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      // const jsonFilePath = path.resolve(
      //   process.cwd(),
      //   "pages",
      //   "api",
      //   "embedding",
      //   "data",
      //   "workExperience.json"
      // );

      // const loader = new JSONLoader(jsonFilePath);

      // const docs = await loader.load();

      const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 50,
        separators: ["##", "\n\n", "\n", " ", ""],
      });

      const output = await splitter.createDocuments([
        workExperienceText,
        projectsText,
        aboutMeText,
      ]);

      const client = createClient(
        process.env.SUPABASE_PROJECT_URL || "",
        process.env.SUPABASE_API_KEY || ""
      );

      const openaiEmbeddingModel = new OpenAIEmbeddings({
        openAIApiKey: process.env.OPENAI_API_KEY || "",
      });

      const cohereEmbeddingModel = new CohereEmbeddings({
        apiKey: process.env.COHERE_API_KEY || "",
        batchSize: 48,
      });

      await SupabaseVectorStore.fromDocuments(output, cohereEmbeddingModel, {
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
