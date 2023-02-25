import { NextApiRequest, NextApiResponse } from "next/types";
import sendEmail from "@/utils/sendEmail";

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {

      const response = await sendEmail(req.body);
      if (response) {
        const data = await response;
        res.status(200).json(data);
      } else {
        throw new Error("No response received from API.");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred.");
    }
  } else {
    res.status(405).send("Method not allowed.");
  }
}
