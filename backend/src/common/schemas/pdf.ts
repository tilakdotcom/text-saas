import { z } from "zod";

export const uploadFileSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size < 15 * 1024 * 1024, {
      message: "File must be less than 15MB",
    })
    .refine((file) => file.type === "application/pdf", {
      message: "File must be a PDF",
    }),
});
