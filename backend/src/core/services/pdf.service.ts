import { abstractTextFromPdf } from "../../common/utils/pdf";
import { getResponseFromOpenAi } from "../../config/openai";

type PdfUploadServiceProps = {
  pdf: string;
  userId: string;
};

export const PdfUploadService = async ({
  pdf,
  userId,
}: PdfUploadServiceProps) => {
  const pdfText = await abstractTextFromPdf(pdf);
  const summaryText = await getResponseFromOpenAi(pdfText.pageContent);
  return { summaryText, userId };
};
