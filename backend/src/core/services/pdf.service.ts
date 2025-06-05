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

  // await new Promise((resolve) => setTimeout(resolve, 5000)); // ⏳ wait 5 seconds

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

export const deletePdfSummaryService = async ({
  id,
  userId,
}: GetPdfSummaryServicesProps) => {
  const deleteSummary = await prisma.pdf.delete({
    where: {
      id,
      userId,
    },
  });

  return { deleteSummary };
};
