import multer from 'multer';
import crypto from 'crypto';
import { Router } from "express";
import { findOneImageController, deleteImageController } from '../controllers/index.js'

const storage = multer.diskStorage(
    { destination: './src/assets/uploads/',
    filename: function (req, file, cb) {
        cb(null, `${crypto.randomBytes(32).toString('hex')}.png` )
    } }
);
const upload = multer({storage: storage});

const imageRoutes = Router();

imageRoutes.post("/", upload.single("image"), (request, response) => {
    response.status(200).json({
        filename: request.file.filename,
        url: `/imagens/${request.file.filename}`
    });
});

imageRoutes.get("/:imageName", (request, response) => {
    return findOneImageController().handle(request,response);
});

imageRoutes.delete("/:imageName", (request, response) => {
    return deleteImageController().handle(request,response);
});

export { imageRoutes };