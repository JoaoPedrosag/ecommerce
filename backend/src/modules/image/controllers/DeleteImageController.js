class DeleteImageController {

    deleteImageService;

    constructor(deleteImageService) {
        this.deleteImageService = deleteImageService;
    }

    async handle(request, response) {
        const { imageName } = request.params;
        const result = await this.deleteImageService.execute(imageName);
        return response.status(200).json(result);
    }
}

export { DeleteImageController }