class CreateVesteController {
    createVesteService

    constructor(createVesteService){
        this.createVesteService = createVesteService;
    }

    async handle(request, response) {
        const { descricao, valor, tamanhos, images, discurso_venda, estoque , shop_name} = request.body;
        const veste = await this.createVesteService.execute({ descricao, valor, tamanhos, images, discurso_venda, estoque , shop_name});
        return response.status(201).json(veste);
    }
}

export { CreateVesteController };
