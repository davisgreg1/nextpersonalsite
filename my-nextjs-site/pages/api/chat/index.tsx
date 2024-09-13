import { NextApiRequest, NextApiResponse } from "next/types";
import { fireChatApi } from "@/utils/openAiChat";
import { hashString } from "@/utils/hashFunctions";
import prisma from "@/lib/prisma";

export default async function chatHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    method,
    body: { inputText, email },
  } = req;

  switch (method) {
    case "POST":
      try {
        if (!email || !inputText) {
          throw new Error("Both email and input text are required.");
        }

        const hashedEmail = hashString(email);
        console.log("GREG LOOK! ~ hashedEmail:", hashedEmail);

        if (inputText.length > 10) {
          const response = await fireChatApi(inputText, hashedEmail);
          if (response) {
            if (response.error) {
              return res.status(403).json({
                data: [
                  {
                    question: "Why am I seeing this message?",
                    answer: `\n\n${response.error}`,
                  },
                ],
              });
            }

            let existingUser = await prisma.user.findFirst({
              where: {
                email: hashedEmail,
              },
            });

            // If user doesn't exist, create a new one
            if (!existingUser) {
              console.log("Creating new user");
              existingUser = await prisma.user.create({
                data: {
                  email: hashedEmail,
                  userid: hashedEmail,
                  updatedat: new Date(),
                },
              });
            }

            // Check if the user is banned
            const userIsBanned = existingUser.banned === 1;

            if (!userIsBanned) {
              // Create a new conversation record
              await prisma.conversation.create({
                data: {
                  question: inputText,
                  answer:
                    response.choices[0]?.message?.content ||
                    "No answer available",
                  user_id: existingUser.id, // Link the conversation to the user
                },
              });

              return res.status(200).json({ data: response });
            } else {
              return res.status(403).json({
                data: [
                  {
                    question: "Why am I seeing this message?",
                    answer: "\n\nYou are banned from using this service.",
                  },
                ],
              });
            }
          } else {
            throw new Error("No response received from OpenAI API.");
          }
        } else {
          throw new Error("Input text must be at least 10 characters.");
        }
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
          data: [
            {
              question: "Why am I seeing this message?",
              answer: "\n\nBecause something broke ☹️. Greg is on it!",
            },
          ],
        });
      }
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({
        data: [
          {
            question: "Why am I seeing this message?",
            answer: `\n\nMethod ${method} is not allowed.`,
          },
        ],
      });
  }
}
