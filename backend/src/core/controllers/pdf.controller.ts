import asyncHandler from "../../middlewares/asyncHandler.middleware";
import { validateFilePdf } from "../../middlewares/file.middleware";
import { PdfUploadService } from "../services/pdf.service";

export const pdfUploadController = asyncHandler(async (req, res) => {
  const body = {
    pdf: validateFilePdf(req.body.pdf),
    userId: req?.userId,
  };

  const { pdf, userId } = await PdfUploadService({
    pdf: body.pdf.path,
    userId: body.userId as string,
  });

  res.status(200).json({
    message: "PDF summary explained successfully",
    success: true,
    data: {
      pdf,
      userId,
    },
  });
});
