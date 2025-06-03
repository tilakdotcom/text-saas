import { abstractTextFromPdf } from "../../common/utils/pdf";
import { getResponseFromGemini } from "../../config/gemini";
import { getResponseFromOpenAi } from "../../config/openai";
import prisma from "../../database/dbConnect";

type PdfUploadServiceProps = {
  pdf: string;
  userId: string;
  fileName: string;
};

export const PdfUploadService = async ({
  pdf,
  userId,
  fileName,
}: PdfUploadServiceProps) => {
  const pdfText = await abstractTextFromPdf(pdf);
  // const summaryText = await getResponseFromOpenAi(pdfText.pageContent);
  const summaryText = await getResponseFromGemini(pdfText.pageContent);

  //create pdf in database
  const newPdf = await prisma.pdf.create({
    data: {
      file_name: fileName,
      original_file_url: "",
      summary_text: summaryText,
      title: "Tilak Resume",
      userId,
      status: "completed",
    },
  });

  return { summary: newPdf, userId };
};
