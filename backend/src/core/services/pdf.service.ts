type PdfUploadServiceProps = {
  pdf: string;
  userId: string;
};

export const PdfUploadService = async ({ pdf, userId }: PdfUploadServiceProps) => {
  return { pdf, userId };
};
