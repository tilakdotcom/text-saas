import { abstractTextFromPdf, formatFileName } from "../../common/utils/pdf";
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
      title: formatFileName(fileName),
      userId,
      status: "COMPLETED",
    },
  });

  return { summary: newPdf, userId };
};

<<<<<<< HEAD
type GetPdfSummariesServicesProps = {
  userId: string;
};

export const getPdfSummariesServices = async ({
  userId,
}: GetPdfSummariesServicesProps) => {
  const summaries = await prisma.pdf.findMany({
    where: {
      userId,
    },
  });

  return {
    summaries,
  };
};

type GetPdfSummaryServicesProps = {
  userId: string;
  id: string;
};

export const getPdfSummaryServices = async ({
  userId,
  id,
}: GetPdfSummaryServicesProps) => {
  const summary = await prisma.pdf.findFirst({
    where: {
      userId,
      id,
    },
  });

  return {
    summary,
  };
};
=======

type GetPdfsServiceProps = {
  userId: string;
};

export const getPdfsService =async({userId}:GetPdfsServiceProps)=>{
const pdfs= await prisma.pdf.findMany({
where })

}
>>>>>>> 72487989492af8f1e0c99d17f5047bdfe2d161e0
