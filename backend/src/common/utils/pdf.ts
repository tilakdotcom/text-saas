import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import appAssert from "../API/AppAssert";
import { BAD_REQUEST } from "../constants/http";

export const abstractTextFromPdf = async (pdfPath: string) => {
  appAssert(pdfPath, BAD_REQUEST, "pdf path is not defined");
  const pdfLoad = new PDFLoader(pdfPath);

  const pdfText = await pdfLoad.load();

  return pdfText[0]
};
