class ListVestesController {
    listVestesService

    constructor(listVestesService){
        this.listVestesService = listVestesService;
    }

    async handle(request, response) {
        const vestes = await this.listVestesService.execute();
        return response.json(vestes);
    }
}

export { ListVestesController };
