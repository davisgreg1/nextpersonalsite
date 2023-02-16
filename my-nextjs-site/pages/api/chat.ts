import { NextApiRequest, NextApiResponse } from "next";
import { fireChatApi } from "@/utils/openAiChat";

export default async function chat(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { inputText } = req.body;

      if (inputText.length > 10) {
        const response = await fireChatApi(inputText);
        if (response) {
          const data = await response.json();
          res.status(200).json(data);
        } else {
          throw new Error("No response received from API.");
        }
      } else {
        throw new Error("Not enough characters in request. Need 10 at least.");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred.");
    }
  } else {
    res.status(405).send("Method not allowed.");
  }
}
