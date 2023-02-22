export async function fireChatApi(inputText: string) {
  try {
    const DEFAULT_PARAMS = {
      model: "text-davinci-003",
      prompt: `reply sarcastically using facts in less than 50 characters: ${inputText}`,
      temperature: 0.5,
      max_tokens: 60,
      top_p: 0.3,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    };
    const params_ = { ...DEFAULT_PARAMS };
    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        "OpenAI-Organization": "org-m76qyCFYpYWzG6DmbhktUOYo",
      },
      body: JSON.stringify(params_),
    };
    const response = await fetch(
      "https://api.openai.com/v1/completions",
      requestOptions
    );
    return response;
  } catch (error) {
    console.log("🚀 ~ file: openAiChat.tsx:29 ~ fireChatApi ~ error", error);
  }
}
