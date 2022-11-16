import AppError from '../../../shared/errors/AppError.js';

class DeleteImageService {
    imageRepository;

    constructor(imageRepository) {
        this.imageRepository = imageRepository;
    }

    async execute(imageName) {
        if (!imageName) {
            throw new AppError('imageName are required!');
        }

        try {
            return await this.imageRepository.delete(imageName);
        } catch (error) {
            throw new AppError(error, 500);
        }
    }
}

export { DeleteImageService };