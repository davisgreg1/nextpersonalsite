import { NextApiRequest, NextApiResponse } from "next/types";
import prisma from "@/lib/prisma";

export default async function chatHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    query: { hashedEmail },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        if (!hashedEmail) {
          throw new Error("hashedEmail is required.");
        }

        // Find the user by their hashed email
        const user = await prisma.user.findFirst({
          where: {
            email: hashedEmail as string,
          },
          select: { id: true, banned: true },
        });

        // If the user is not found, return a 404
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }

        // Check if the user is banned
        const userIsBanned = user.banned === 1;
        if (userIsBanned) {
          return res.status(403).json({
            data: [
              {
                question: "Why am I banned?",
                answer: "\n" + "\n" + "Because you were too inappropriate.",
              },
            ],
          });
        }

        // Fetch the latest 15 conversations for the user
        const conversations = await prisma.conversation.findMany({
          where: {
            user_id: user.id,
          },
          orderBy: {
            createdat: "desc", // Order by created date in descending order
          },
          take: 15, // Limit to 15 conversations
        });

        // Return the conversations in reverse order for display purposes
        res.status(200).json({ data: conversations.reverse() });
      } catch (error) {
        console.error("Error fetching conversations:", error);
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
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({
        data: [
          {
            question: "Why am I seeing this message?",
            answer: "\n" + "\n" + `Because Method: ${method} is not allowed.`,
          },
        ],
      });
  }
}
