import multer from 'multer';
import { Router } from "express";
import { uploadImageController } from '../controllers/index.js'

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

const imageRoutes = Router();

imageRoutes.post("/", upload.single("image"), (request, response) => {
    return uploadImageController().handle(request,response);
});

export { imageRoutes };