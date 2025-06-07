import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import appAssert from "../API/AppAssert";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/http";
import { createWorker } from "tesseract.js";
import ApiError from "../API/ApiError";
import fs from "fs"
import pdf from "pdf-parse"

export const abstractTextFromPdf = async (pdfPath: string) => {
  appAssert(pdfPath, BAD_REQUEST, "pdf path is not defined");
  const pdfLoad = new PDFLoader(pdfPath);

  const pdfText = await pdfLoad.load();

  return pdfText[0];
};

export const abstractTextFromPdfOCR = async (pdfPath: string) => {
  appAssert(pdfPath, BAD_REQUEST, "pdf path is not defined");
  const ocrText = await runOCR(pdfPath);

  return ocrText;
};

async function runOCR(pdfPath: string) {
  try {
    const worker = await createWorker("eng");

    const { data } = await worker.recognize(pdfPath);

    await worker.terminate();

    return data.text;
  } catch (error) {
    throw new ApiError(INTERNAL_SERVER_ERROR, error as string);
  }
}

export async function getPdfPageCount(pdfPath: string) {
  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdf(dataBuffer);
  console.log(`Page count: ${data.numpages}`);
  return data.numpages;
}

export function formatFileName(url: string) {
  const fileName = url.split("/").pop() || "";
  return fileName
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("")
    .trim();
}
