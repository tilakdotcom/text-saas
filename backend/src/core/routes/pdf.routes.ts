import { Router } from "express";
import verifyUser from "../../middlewares/auth.middleware";
import { pdfUploadController } from "../controllers/pdf.controller";

const router = Router();

router.use(verifyUser);

router.route("/new").get(pdfUploadController);


export default router;