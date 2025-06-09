import { GenerateContentConfig, GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY, GEMINI_API_KEY_2 } from "../common/constants/getEnv";
import { SUMMARY_SYSTEM_PROMPT } from "../common/constants/systemPrompt";
import {
  INTERNAL_SERVER_ERROR,
  LIMIT_EXCEEDED,
} from "../common/constants/http";
import ApiError from "../common/API/ApiError";
import ApiErrorCode from "../common/constants/apiErrorCode";
import appAssert from "../common/API/AppAssert";

export const gemini1 = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});
export const gemini2 = new GoogleGenAI({
  apiKey: GEMINI_API_KEY_2,
});

export async function getResponseFromGemini(pdfText: string) {
  const config: GenerateContentConfig = {
    temperature: 0.8,
    maxOutputTokens: 1500,
  };

  const model = "gemini-2.0-flash-lite";

  const contents = [
    {
      role: "user",
      parts: [
        {
          text: SUMMARY_SYSTEM_PROMPT,
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}.`,
        },
      ],
    },
  ];

  // Helper to make call
  async function callGemini(geminiInstance: GoogleGenAI) {
    const geminiResponse = await geminiInstance.models.generateContent({
      model,
      config,
      contents,
    });
    appAssert(
      geminiResponse.text,
      INTERNAL_SERVER_ERROR,
      "Empty Response from gemini"
    );
    return geminiResponse.text;
  }

  try {
    // First try with gemini1
    return await callGemini(gemini1);
  } catch (error: any) {
    if (error?.status === 429) {
      console.warn("Gemini1 limit exceeded, trying Gemini2...");
      try {
        return await callGemini(gemini2);
      } catch (err: any) {
        if (err?.status === 429) {
          throw new ApiError(
            LIMIT_EXCEEDED,
            err.message,
            ApiErrorCode.LIMIT_EXCEEDED
          );
        } else if (err instanceof Error) {
          throw new ApiError(INTERNAL_SERVER_ERROR, err.message);
        } else {
          throw new ApiError(INTERNAL_SERVER_ERROR, "ai not available ");
        }
      }
    } else if (error instanceof Error) {
      throw new ApiError(INTERNAL_SERVER_ERROR, error.message);
    } else {
      throw new ApiError(INTERNAL_SERVER_ERROR, "ai not available ");
    }
  }
}
