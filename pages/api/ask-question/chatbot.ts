import { ChatCohere } from "@langchain/cohere";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import {
  RunnablePassthrough,
  RunnableSequence,
} from "@langchain/core/runnables";
import type { NextApiRequest, NextApiResponse } from "next";
import { combineDocuments } from "../../../utils/combineDocuments";
import { retriever } from "../../../utils/retriever";

type Data = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "PATCH") {
    const { question, convHistory } = JSON.parse(req.body);

    const llm = new ChatCohere({
      apiKey: process.env.COHERE_API_KEY,
      model: "command",
    });

    const standaloneQuestionTemplate = `Given some conversation history (if any) and a question, convert the question to a standalone question. 
    conversation history: {conv_history}
    question: {question} 
    standalone question:`;

    const standaloneQuestionPrompt = PromptTemplate.fromTemplate(
      standaloneQuestionTemplate
    );

    const answerTemplate = `You're support bot to respond to inquiries using first-person language, where "you", "your", and "yours" refer to Rajib Mondal. The bot should provide answers as if Rajib Mondal is directly speaking. It should leverage the provided context and conversation history. If an answer isn't available, prompt the user to email mondalrajib2002@gmail.com for further assistance. Maintain a professional and motivated tone suitable for interactions with recruiters or business founders. Answer precisely not more than 100 words, and avoid unnecessary information.

    context: {context}
    conversation history: {conv_history}
    question: {question}
    answer:
    `;

    const answerPrompt = PromptTemplate.fromTemplate(answerTemplate);

    const standaloneQuestionChain = standaloneQuestionPrompt
      .pipe(llm)
      .pipe(new StringOutputParser());

    const retrieverChain = RunnableSequence.from([
      (prevResult) => prevResult.standalone_question,
      retriever,
      combineDocuments,
    ]);
    const answerChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());

    const chain = RunnableSequence.from([
      {
        standalone_question: standaloneQuestionChain,
        original_input: new RunnablePassthrough(),
      },
      {
        context: retrieverChain,
        question: ({ original_input }) => original_input.question,
        conv_history: ({ original_input }) => original_input.conv_history,
      },
      answerChain,
    ]);

    const response = await chain.invoke({
      question: question,
      conv_history: convHistory || "",
    });

    res.status(200).json({ status: response });
  }
}
