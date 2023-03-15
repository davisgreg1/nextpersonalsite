import { NextApiRequest, NextApiResponse } from "next/types";
import { fireChatApi } from "@/utils/openAiChat";
import { hashString } from "@/utils/hashFunctions";
import prisma from "@/lib/prisma";

export default async function chatHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    body: { inputText, email },
  } = req;

  switch (method) {
    case "POST":
      try {
        const hashedEmail = hashString(email);

        if (inputText.length > 10) {
          const response = await fireChatApi(inputText, hashedEmail);
          if (response) {
            if (response.error) {
              return res.status(403).json({
                data: [
                  {
                    question: "Why am I seeing this message?",
                    answer: "\n" + "\n" + `${response.error}`,
                  },
                ],
              });
            }
            const data = await response;
            const existingUser = await prisma.user.findFirst({
              where: {
                email: hashedEmail,
              },
            });

            const userIsBanned = Boolean(existingUser?.banned);

            if (!existingUser && !userIsBanned) {
              await prisma.user.create({
                data: {
                  email: hashedEmail,
                  userId: hashedEmail,
                },
              });
              // user with this email already exists, return an error or do something else
            }
            if (!userIsBanned) {
              await prisma.conversation.create({
                data: {
                  question: inputText,
                  answer: data?.choices[0]?.message?.content,
                  user: {
                    connect: {
                      email: hashedEmail,
                    },
                  },
                },
              });
            }
            res.status(200).json({ data });
          } else {
            throw new Error("No response received from pages API.");
          }
        } else {
          throw new Error(
            "Not enough characters in request. Need 10 at least."
          );
        }
      } catch (error) {
        console.error({ error });
        res.status(500).json({
          data: [
            {
              question: "Why am I seeing this message?",
              answer:
                "\n" + "\n" + `Because something broke ☹️. Greg is on it!`,
            },
          ],
        });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end({
        data: [
          {
            question: "Why am I seeing this message?",
            answer:
              "\n" + "\n" + `Because Method: ${method} is not allowed. 😕`,
          },
        ],
      });
  }
}
