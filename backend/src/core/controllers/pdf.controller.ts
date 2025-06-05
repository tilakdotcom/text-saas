import asyncHandler from "../../middlewares/asyncHandler.middleware";
import { validateFilePdf } from "../../middlewares/file.middleware";
import {
  deletePdfSummaryService,
  getPdfSummariesServices,
  getPdfSummaryServices,
  PdfUploadService,
} from "../services/pdf.service";

export const pdfUploadController = asyncHandler(async (req, res) => {
  const body = {
    pdf: validateFilePdf(req.file as Express.Multer.File),
    userId: req?.userId,
  };

  const { summary, userId } = await PdfUploadService({
    pdf: body.pdf.path,
    userId: body.userId as string,
    fileName: body.pdf.fileName,
  });

  res.status(201).json({
    message: "PDF summary explained successfully",
    success: true,
    data: {
      summary,
      userId,
    },
  });
});

export const getPdfSummariesController = asyncHandler(async (req, res) => {
  const { summaries } = await getPdfSummariesServices({
    userId: req?.userId as string,
  });

  res.status(200).json({
    message: "pdf summaries fetched",
    success: true,
    data: summaries,
  });
});

export const getPdfSummaryController = asyncHandler(async (req, res) => {
  const { summary } = await getPdfSummaryServices({
    userId: req?.userId as string,
    id: req.params.id,
  });

  res.status(200).json({
    message: "pdf summary fetched",
    success: true,
    data: summary,
  });
});

export const deletePdfSummaryController = asyncHandler(async (req, res) => {
  const { deleteSummary } = await deletePdfSummaryService({
    userId: req?.userId as string,
    id: req.params.id,
  });

  res.status(200).json({
    message: "pdf summary deleted",
    success: true,
    data: deleteSummary,
  });
});
