class DeleteVesteController {
    deleteVesteService

    constructor(deleteVesteService){
        this.deleteVesteService = deleteVesteService;
    }

    async handle(request, response) {
        const { id } = request.params;
        const veste = await this.deleteVesteService.execute(id);

        return response.status(200).json(veste);
    }
}

export { DeleteVesteController };
