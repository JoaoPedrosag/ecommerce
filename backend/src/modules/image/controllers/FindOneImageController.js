class FindOneImageController {

    findOneImageService;

    constructor(findOneImageService) {
        this.findOneImageService = findOneImageService;
    }

    async handle(request, response) {
        const { imageName } = request.params;
        const result = await this.findOneImageService.execute(imageName);
        return response.status(200).json({url: result});
    }
}

export { FindOneImageController }