import { Router } from "express";
import verifyUser from "../../middlewares/auth.middleware";
import { pdfUploadController } from "../controllers/pdf.controller";
import upload from "../../middlewares/multer.middleware";

const router = Router();

router.use(verifyUser);

router.route("/new").post(upload.single("pdf"), pdfUploadController);

router.route("/").get();

export default router;
