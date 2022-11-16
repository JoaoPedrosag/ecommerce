class UploadImageController {

    uploadImageService;

    constructor(uploadImageService) {
        this.uploadImageService = uploadImageService;
    }

    async handle(request, response) {
        const { originalname, buffer, mimetype } = request.file;
        const result = await this.uploadImageService.execute({ originalname, buffer, mimetype });
        return response.status(200).json(result);
    }
}

export { UploadImageController }