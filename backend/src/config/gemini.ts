import { GenerateContentConfig, GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "../common/constants/getEnv";
import { SUMMARY_SYSTEM_PROMPT } from "../common/constants/systemPrompt";
import {
  INTERNAL_SERVER_ERROR,
  LIMIT_EXCEEDED,
} from "../common/constants/http";
import ApiError from "../common/API/ApiError";
import ApiErrorCode from "../common/constants/apiErrorCode";
import appAssert from "../common/API/AppAssert";

const gemini = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

export async function getResponseFromGemini(pdfText: string) {
  const config: GenerateContentConfig = {
    temperature: 0.8,
    maxOutputTokens: 1500,
  };

  const model = "gemini-2.0-flash";

  const contents = [
    {
      role: "system",
      parts: [
        {
          text: SUMMARY_SYSTEM_PROMPT,
        },
      ],
    },
    {
      role: "",
      parts: [
        {
          text: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}.`,
        },
      ],
    },
  ];

  try {
    const geminiResponse = await gemini.models.generateContent({
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
