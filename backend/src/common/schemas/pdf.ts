import { z } from "zod";

export const pdfSchema = z.object({
  mimetype: z.string().refine((mimetype) => mimetype === "application/pdf", {
    message: "Only PDF files are allowed",
  }),
  size: z
    .number()
    .max(15 * 1024 * 1024, { message: "PDF must be less than 15MB" }),
  fieldname: z.string().optional(),
  originalname: z
    .string()
    .refine((name) => name.toLowerCase().endsWith(".pdf"), {
      message: "File must have a .pdf extension",
    }),
  destination: z.string(),
  filename: z.string(),
  path: z.string(),
});
