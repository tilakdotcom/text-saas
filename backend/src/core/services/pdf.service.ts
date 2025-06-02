import { abstractTextFromPdf } from "../../common/utils/pdf";

type PdfUploadServiceProps = {
  pdf: string;
  userId: string;
};

export const PdfUploadService = async ({ pdf, userId }: PdfUploadServiceProps) => {
  const pdfText = await abstractTextFromPdf(pdf)
  return { pdfText, userId };
};
