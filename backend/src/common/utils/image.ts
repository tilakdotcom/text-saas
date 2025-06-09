import { Poppler } from "node-poppler";
import path from "path";
import fs from "fs";
import ApiError from "../API/ApiError";
import { INTERNAL_SERVER_ERROR } from "../constants/http";

const poppler = new Poppler();
const outputFilePrefix = Date.now() + "-page";

export async function convertPDFToImage({
  file,
  lastPage,
  userId,
}: {
  file: string;
  lastPage: number;
  userId: string;
}) {
  try {
    const userImagesFolder = path.join(__dirname, "../public/images", userId);
    if (!fs.existsSync(userImagesFolder)) {
      fs.mkdirSync(userImagesFolder, { recursive: true });
    }
    const output = await poppler.pdfToCairo(
      file,
      path.join(userImagesFolder, outputFilePrefix),
      {
        pngFile: true,
        firstPageToConvert: 1,
        lastPageToConvert: lastPage,
      }
    );
    fs.unlinkSync(file)
  } catch (err) {
    throw new ApiError(INTERNAL_SERVER_ERROR, err as string);
  }
}

export const getUserImagePaths = (userId: string) => {
  try {
    const userImagesFolder = path.join(__dirname, "../public/images", userId);

    if (!fs.existsSync(userImagesFolder)) {
      return [];
    }

    const files = fs.readdirSync(userImagesFolder);

    const imageFiles = files.filter((file) => /\.(png|jpe?g)$/i.test(file));

    const imagePaths = imageFiles.map((file) =>
      path.join(userImagesFolder, file)
    );

    return imagePaths;
  } catch (err) {
    throw new ApiError(INTERNAL_SERVER_ERROR, err as string);
  }
};
