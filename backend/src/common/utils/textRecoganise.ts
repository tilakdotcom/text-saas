import { createWorker } from "tesseract.js";

 export async function runOCR(pdfPath: string) {
  const worker = await createWorker("eng");

  const { data } = await worker.recognize(pdfPath);

  await worker.terminate();

  return data.text;
}
