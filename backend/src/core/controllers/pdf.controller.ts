import { uploadFileSchema } from "../../common/schemas/pdf";
import asyncHandler from "../../middlewares/asyncHandler.middleware";

export const pdfUploadController = asyncHandler(async (req, res) => {
  const body = {
    pdf: uploadFileSchema.parse(req.body.pdf),
    userId: req?.userId,
    ...req,
  };

  

  res.status(200).json({ message: "Server is running", success: true });
});
