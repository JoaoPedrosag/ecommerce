import {ImageRepository} from '../repositories/ImageRepository.js';

import { UploadImageController } from './UploadImageController.js';
import { UploadImageService } from '../services/UploadImageService.js';

const imageRepository = new ImageRepository();

const uploadImageService = new UploadImageService(imageRepository);
export function uploadImageController(){
    return new UploadImageController(uploadImageService);
}