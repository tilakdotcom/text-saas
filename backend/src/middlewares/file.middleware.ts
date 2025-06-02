import { uploadPdfSchema } from "../common/schemas/pdf";
import { imageSchema } from "../common/schemas/user";

export const validateFileImage = (file: Express.Multer.File) => {
  const image = imageSchema.parse({
    mimetype: file.mimetype,
    size: file.size,
    fieldname: file.fieldname,
    originalname: file.originalname,
    destination: file.destination,
    filename: file.filename,
    path: file.path,
  });
  return { path: image.path, filename: image.filename };
};

export const validateFilePdf = (file: Express.Multer.File) => {
  const pdf = uploadPdfSchema.parse(file);
  return { path: pdf.path, fileName: pdf.filename };
};
