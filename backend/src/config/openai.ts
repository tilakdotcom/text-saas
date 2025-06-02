import OpenAI from "openai";
import { OPEN_AI_KEY } from "../common/constants/getEnv";
import ApiError from "../common/API/ApiError";
import {
  INTERNAL_SERVER_ERROR,
  LIMIT_EXCEEDED,
} from "../common/constants/http";
import ApiErrorCode from "../common/constants/apiErrorCode";
import { SUMMARY_SYSTEM_PROMPT } from "../common/constants/systemPrompt";

// Instantiate OpenAI with your API key
const openai = new OpenAI({
  apiKey: OPEN_AI_KEY,
});

export async function getResponseFromOpenAi(pdfText: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: SUMMARY_SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}.`,
        },
      ],
      temperature: 0.7,
      max_completion_tokens: 1500,
    });
    console.log(response.choices[0].message.content);
  } catch (error: any) {
    if (error?.status === 429) {
      throw new ApiError(
        LIMIT_EXCEEDED,
        error.message,
        ApiErrorCode.LIMIT_EXCEEDED
      );
    }
    if (error instanceof Error) {
      throw new ApiError(INTERNAL_SERVER_ERROR, error.message);
    } else {
      throw new ApiError(INTERNAL_SERVER_ERROR, "Error in openai");
    }
  }
}
