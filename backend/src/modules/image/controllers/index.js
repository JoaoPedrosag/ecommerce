import {ImageRepository} from '../repositories/ImageRepository.js';

import { UploadImageController } from './UploadImageController.js';
import { UploadImageService } from '../services/UploadImageService.js';

import {FindOneImageController} from './FindOneImageController.js';
import {FindOneImageService} from '../services/FindOneImageService.js';

import {DeleteImageController} from './DeleteImageController.js';
import {DeleteImageService} from '../services/DeleteImageService.js';

const imageRepository = new ImageRepository();

const uploadImageService = new UploadImageService(imageRepository);
export function uploadImageController(){
    return new UploadImageController(uploadImageService);
}

const findOneImageService = new FindOneImageService(imageRepository);
export function findOneImageController(){
    return new FindOneImageController(findOneImageService);
}

const deleteImageService = new DeleteImageService(imageRepository);
export function deleteImageController(){
    return new DeleteImageController(deleteImageService);
}