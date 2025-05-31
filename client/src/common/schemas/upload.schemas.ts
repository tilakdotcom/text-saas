import { z } from "zod";

export const uploadFileSchema = z.object({
  file: z
    .instanceof(File, { message: 'Invalid File' })
    .refine(
      (file) => file.size < 20 * 1024 * 1024,
      'File Must be less than 20MB'
    )
    .refine(
      (file) => file.type.startsWith('application/pdf'),
      'File Must be a PDF'
    )
    .nullable()
});