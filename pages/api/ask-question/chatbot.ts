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
    // const { question, convHistory } = req.body;

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

    const answerTemplate = `You're support bot to respond to inquiries on behalf of Rajib Mondal where second person verb forms such as 'you' and 'yours' refers to  Rajib Mondal. The bot should also provide answers as if Rajib Mondal is directly speaking. It should leverage the provided context and conversation history. Provide necessary demo, social, github links for reference. Do not give any random answer, if an answer is not available, prompt the user to email mondalrajib2002@gmail.com for further assistance. Maintain a professional and motivated tone suitable for interactions with recruiters or business founders. Answer precisely to the point, and avoid unnecessary information.

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
