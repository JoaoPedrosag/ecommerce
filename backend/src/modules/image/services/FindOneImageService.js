import AppError from '../../../shared/errors/AppError.js';

class FindOneImageService {
    imageRepository;

    constructor(imageRepository) {
        this.imageRepository = imageRepository;
    }

    async execute(imageName) {
        if (!imageName) {
            throw new AppError('imageName are required!');
        }

        try {
            return await this.imageRepository.getUrl(imageName);
        } catch (error) {
            throw new AppError(error, 500);
        }
    }
}

export { FindOneImageService };