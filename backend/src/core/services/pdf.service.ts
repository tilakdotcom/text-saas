import ApiError from "../../common/API/ApiError";
import { NOT_FOUND } from "../../common/constants/http";
import {
  abstractTextFromPdf,
  abstractTextFromPdfOCR,
  formatFileName,
  getPdfPageCount,
} from "../../common/utils/pdf";
import { getResponseFromGemini } from "../../config/gemini";
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
  let summaryText: string;

  const num = await getPdfPageCount(pdf);

  const pdfParsed = await abstractTextFromPdf(pdf);

  if (pdfParsed != undefined && pdfParsed.pageContent.length > 100) {
    summaryText = pdfParsed.pageContent;
  } else if (pdfParsed === undefined || pdfParsed.pageContent.length < 100) {
    const pdfTextOcr = await abstractTextFromPdfOCR({
      lastPage: num,
      pdfPath: pdf,
      userId,
    });
    summaryText = pdfTextOcr;
  } else {
    throw new ApiError(NOT_FOUND, "text not found");
  }

  const aiResponse = await getResponseFromGemini(summaryText);

  // await new Promise((resolve) => setTimeout(resolve, 5000)); // wait 5 seconds

  //create pdf in database
  const newPdf = await prisma.pdf.create({
    data: {
      file_name: fileName,
      original_text: summaryText,
      summary_text: aiResponse,
      title: formatFileName(fileName),
      userId,
      original_file_url: "",
      status: "COMPLETED",
    },
  });

  return { summary: newPdf, userId };
};

type GetPdfSummariesServicesProps = {
  userId: string;
  limit: number;
  page: number;
  orderByValue: string;
};

export const getPdfSummariesServices = async ({
  userId,
  limit,
  orderByValue,
  page,
}: GetPdfSummariesServicesProps) => {
  const skip = (page - 1) * limit;
  const summaries = await prisma.pdf.findMany({
    where: { userId },
    skip,
    orderBy: {
      [orderByValue]: "desc",
    },
    take: limit,
  });

  const totalSummariesCount = await prisma.pdf.count({ where: { userId } });

  return {
    summaries,
    totalSummariesCount,
    totalPages: Math.ceil(totalSummariesCount / limit),
    currentPage: page,
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
