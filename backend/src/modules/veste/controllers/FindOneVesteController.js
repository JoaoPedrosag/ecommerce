class FindOneVesteController {
    findOneVesteService

    constructor(findOneVesteService){
        this.findOneVesteService = findOneVesteService;
    }

    async handle(request, response) {
        const {id} = request.params;
        const veste = await this.findOneVesteService.execute(id);
        return response.json(veste);
    }
}

export { FindOneVesteController };
