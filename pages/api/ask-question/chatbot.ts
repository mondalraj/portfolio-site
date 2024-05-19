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
    const { question } = JSON.parse(req.body);

    const llm = new ChatCohere({
      apiKey: process.env.COHERE_API_KEY,
      model: "command",
    });

    const standaloneQuestionTemplate = `Convert the question to a standalone question.
    question: {question} 
    standalone question:`;

    const standaloneQuestionPrompt = PromptTemplate.fromTemplate(
      standaloneQuestionTemplate
    );

    const answerTemplate = `You're friendly bot to respond to inquiries on behalf of Rajib Mondal where second person verb forms such as 'you' and 'yours' refers to  Rajib Mondal. The bot should also provide answers as if Rajib Mondal is directly speaking. Provide necessary demo, social, github links for reference if required. Do not give any random answers, if an answer is not available, prompt the user to email mondalrajib2002@gmail.com for further assistance. Maintain a professional and motivated tone suitable for interactions with recruiters or business founders. Answer precisely to the point, and avoid unnecessary information.

    context: {context}
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
      },
      answerChain,
    ]);

    const response = await chain.invoke({
      question: question,
    });

    res.status(200).json({ status: response });
  }
}
