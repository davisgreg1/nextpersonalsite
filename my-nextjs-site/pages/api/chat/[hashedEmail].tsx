import { NextApiRequest, NextApiResponse } from "next/types";
import prisma from "@/lib/prisma";

export default async function chatHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { hashedEmail },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const user = await prisma.user.findFirst({
          where: {
            email: hashedEmail as string,
          },
        });
        const userIsBanned = Boolean(user?.banned);
        if (userIsBanned) {
          res.status(200).json({
            data: [
              {
                question: "Why am I banned?",
                answer: "\n" + "\n" + "Because you were too innapropriate.",
              },
            ],
          });
        }
        const conversations = await prisma.conversation.findMany({
          where: {
            user: {
              email: hashedEmail as string,
            },
          },
          orderBy: {
            createdAt: "asc",
          } as any,
          take: 15,
        });

        res.status(200).json({ data: conversations });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          data: [
            {
              question: "Why am I seeing this message?",
              answer:
                "\n" +
                "\n" +
                "Because something broke 😕. Greg is on it though.",
            },
          ],
        });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).json({
        data: [
          {
            question: "Why am I seeing this message?",
            answer:
              "\n" +
              "\n" +
              `Because something went awry with the method: ${method}. Greg is on it!`,
          },
        ],
      });
  }
}
