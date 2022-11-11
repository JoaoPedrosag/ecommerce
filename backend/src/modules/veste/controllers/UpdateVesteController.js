class UpdateVesteController {
    updateVesteService

    constructor(updateVesteService){
        this.updateVesteService = updateVesteService;
    }

    async handle(request, response) {
        const { id } = request.params;
        const { descricao, valor, tamanhos, images, discurso_venda, estoque, shop_name} = request.body;
        const veste = await this.updateVesteService.execute(id, { descricao, valor, tamanhos, images, discurso_venda, estoque , shop_name});

        return response.status(200).json(veste);
    }
}

export { UpdateVesteController };
