import { NextApiRequest, NextApiResponse } from "next/types";
import { fireChatApi } from "@/utils/openAiChat";
import prisma from "@/lib/prisma";

export default async function chat(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { inputText } = req.body;
      const newConversation = {
        messages: inputText,
        conversationId: 1, // replace with the ID of the user associated with this conversation
      };

      if (inputText.length > 10) {
        const response = await fireChatApi(inputText);
        if (response) {
          const data = await response;
          // const createdConversation = await prisma.conversation.create({
          //   data: newConversation,
          // });

          return res.status(200).json({ data });
        } else {
          throw new Error("No response received from pages API.");
        }
      } else {
        throw new Error("Not enough characters in request. Need 10 at least.");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ data: "An error occurred." });
    }
  } else {
    res.status(405).send({ data: "Method not allowed." });
  }
}
