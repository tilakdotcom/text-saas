import { z } from "zod";

export const uploadPdfSchema = z.object({
  mimetype: z.literal("application/pdf"),
  size: z.number().max(15 * 1024 * 1024, { message: "File must be less than 15MB" }),
  originalname: z.string(),
  path: z.string(),
  filename: z.string(),
});
