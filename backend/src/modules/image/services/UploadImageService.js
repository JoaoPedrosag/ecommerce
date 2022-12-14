import AppError from '../../../shared/errors/AppError.js';

class UploadImageService {
    imageRepository;

    constructor(imageRepository) {
        this.imageRepository = imageRepository;
    }

    async execute({ originalname, buffer, mimetype }) {

        if (!buffer) {
            throw new AppError('Buffer are required!');
        }

        try {
            return await this.imageRepository.upload({ originalname, buffer, mimetype });
        } catch (error) {
            throw new AppError(error, 500);
        }
    }
}

export { UploadImageService };