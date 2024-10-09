import prisma from "@/lib/prisma";
import { getTokens } from "@/lib/tokenizer";

export async function fireChatApi(inputText: string, email: string) {
  const command = `reply in less than 350 characters: `;
  const userQuestion = `${command}${inputText}`;
  try {
    const DEFAULT_PARAMS = {
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a funny helpful assistant to Greg. Greg is a full-stack developer with nearly a decade of experience. He specializes in React, Next JS, CSS, JavaScript, HTML, NodeJS, and he is currently learning PHP. He is from Harlem, NYC. He has made it through many obstacles and turmoils to get thus far in his careeer and life. He's excited to help out and even code up an app if the opportunity aligns with his values. He values family, helping less fortunate people, and educating children. He was a social worker for many years until he switched careers to Web Development. He now uses these amazing skills to effect change for that population.",
        },
        {
          role: "user",
          content: userQuestion,
        },
      ],
      temperature: 0.5,
      max_tokens: 300,
      top_p: 0.3,
      frequency_penalty: 0.5,
      presence_penalty: 0,
      user: email,
    };
    const params_ = { ...DEFAULT_PARAMS };
    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        "OpenAI-Organization": "org-m76qyCFYpYWzG6DmbhktUOYo",
      },
      body: JSON.stringify(params_),
    };

    let tokenCount = getTokens(userQuestion);

    const moderationOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        "OpenAI-Organization": "org-m76qyCFYpYWzG6DmbhktUOYo",
      },
      body: JSON.stringify({ input: inputText }),
    };

    const moderationsRes = await fetch(
      "https://api.openai.com/v1/moderations",
      moderationOptions,
    );
    const moderationData = await moderationsRes.json();

    const [results] = moderationData.results;

    if (results.flagged) {
      await prisma.user.update({
        where: {
          email: email,
        },
        data: {
          banned: 1,
        },
      });
      return {
        error:
          "Your input has been flagged by the AI and you are banned. Do better.",
      };
    } else if (tokenCount > 4000) {
      throw new Error("You have exceeded the character limit. Try again.");
    } else {
      const data = await fetch(
        "https://api.openai.com/v1/chat/completions",
        requestOptions,
      );
      const response = await data.json();

      return response;
    }
  } catch (error) {
    console.error("🚀 ~ file: openAiChat.tsx:74 ~ fireChatApi ~ error", error);
    return error;
  }
}
