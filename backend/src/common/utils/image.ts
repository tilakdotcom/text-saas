import { Poppler } from "node-poppler";
import path from "path";
import fs from "fs";

const poppler = new Poppler();
const outputDir = "./public/images";
const outputFilePrefix = "page";

export async function convertPDF(file: string, lastPage: number) {
  try {
    const output = await poppler.pdfToCairo(
      file,
      path.join(outputDir, outputFilePrefix),
      {
        pngFile: true,
        firstPageToConvert: 1,
        lastPageToConvert: lastPage,
      }
    );
    console.log("PDF converted to images:", output);
  } catch (err) {
    console.error("Error converting PDF:", err);
  }
}

const getUserImagePaths = (userId: string) => {
  const userImagesFolder = path.join(__dirname, "../public/images", userId);

  if (!fs.existsSync(userImagesFolder)) {
    return []; // No images yet
  }

  const files = fs.readdirSync(userImagesFolder);

  const imageFiles = files.filter((file) => /\.(png|jpe?g)$/i.test(file));

  const imagePaths = imageFiles.map((file) =>
    path.join(userImagesFolder, file)
  );

  return imagePaths;
};
