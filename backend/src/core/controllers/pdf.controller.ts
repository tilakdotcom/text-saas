import { modeSchema } from "../../common/schemas/pdf";
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
    mode: modeSchema.parse(req.body.mode),
  };

  const { summary, userId } = await PdfUploadService({
    pdf: body.pdf.path,
    userId: body.userId as string,
    fileName: body.pdf.fileName,
    mode: body.mode,
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
  const userId = req.userId as string;
  const { limit, page, orderByValue } = req.query as unknown as {
    limit: string;
    page: string;
    orderByValue: string;
  };
  const { summaries, totalSummariesCount, totalPages, currentPage } =
    await getPdfSummariesServices({
      userId,
      limit: Number(limit) || 12,
      orderByValue: orderByValue || "createdAt",
      page: Number(page) || 1,
    });

  res.status(200).json({
    message: "pdf summaries fetched",
    success: true,
    data: {
      summaries,
      totalSummariesCount,
      totalPages,
      currentPage,
    },
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
