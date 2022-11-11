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
            const url = await this.imageRepository.upload({ originalname, buffer, mimetype });
            return url;
        } catch (error) {
            throw new AppError(error, 500);
        }
    }
}

export { UploadImageService };