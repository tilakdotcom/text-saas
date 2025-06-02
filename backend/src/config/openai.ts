import OpenAI from "openai";
import { OPEN_AI_KEY } from "../common/constants/getEnv";
import ApiError from "../common/API/ApiError";
import {
  INTERNAL_SERVER_ERROR,
  LIMIT_EXCEEDED,
} from "../common/constants/http";
import ApiErrorCode from "../common/constants/apiErrorCode";

// Instantiate OpenAI with your API key
const openai = new OpenAI({
  apiKey: OPEN_AI_KEY,
});

export async function getResponseFromOpenAi() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are helpful Assistant.",
        },
        {
          role: "user",
          content: "",
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
