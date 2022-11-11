import multer from 'multer';
import { Router } from "express";
import { uploadImageController, findOneImageController, deleteImageController } from '../controllers/index.js'

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

const imageRoutes = Router();

imageRoutes.post("/", upload.single("image"), (request, response) => {
    return uploadImageController().handle(request,response);
});

imageRoutes.get("/:imageName", (request, response) => {
    return findOneImageController().handle(request,response);
});

imageRoutes.delete("/:imageName", (request, response) => {
    return deleteImageController().handle(request,response);
});

export { imageRoutes };