import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import appAssert from "../API/AppAssert";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/http";
import fs from "fs";
import pdf from "pdf-parse";
import { runOCR } from "./textRecoganise";
import ApiError from "../API/ApiError";
import { convertPDFToImage, getUserImagePaths } from "./image";

export const abstractTextFromPdf = async (pdfPath: string) => {
  appAssert(pdfPath, BAD_REQUEST, "pdf path is not defined");
  const pdfLoad = new PDFLoader(pdfPath);

  const pdfText = await pdfLoad.load();

  return pdfText[0];
};

export const abstractTextFromPdfOCR = async ({
  lastPage,
  pdfPath,
  userId,
}: {
  pdfPath: string;
  userId: string;
  lastPage: number;
}) => {
  appAssert(pdfPath, BAD_REQUEST, "pdf path is not defined");
  try {
    let absText: string = "";
    await convertPDFToImage({ file: pdfPath, lastPage, userId });
    const images = getUserImagePaths(userId);
    for (const image of images) {
      const text = await runOCR(image);
      console.log("text ", text);
      absText += text;
      fs.unlinkSync(image);
    }
    return absText;
  } catch (err) {
    throw new ApiError(INTERNAL_SERVER_ERROR, err as string);
  }
};

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
