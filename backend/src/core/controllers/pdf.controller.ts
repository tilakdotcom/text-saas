import asyncHandler from "../../middlewares/asyncHandler.middleware";
import { validateFilePdf } from "../../middlewares/file.middleware";
import { PdfUploadService } from "../services/pdf.service";

export const pdfUploadController = asyncHandler(async (req, res) => {
  const body = {
    pdf: validateFilePdf(req.file as Express.Multer.File),
    userId: req?.userId,
  };

  const { pdfText, userId } = await PdfUploadService({
    pdf: body.pdf.path,
    userId: body.userId as string,
  });

  res.status(200).json({
    message: "PDF summary explained successfully",
    success: true,
    data: {
      pdfText,
      userId,
    },
  });
});
