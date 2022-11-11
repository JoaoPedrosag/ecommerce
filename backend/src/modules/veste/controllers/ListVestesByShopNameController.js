class ListVestesByShopNameController {
    listVestesByShopNameService

    constructor(listVestesByShopNameService) {
        this.listVestesByShopNameService = listVestesByShopNameService;
    }

    async handle(request, response) {
        const { shop_name } = request.params;
        const vestes = await this.listVestesByShopNameService.execute(shop_name);
        return response.json(vestes);
    }
}

export { ListVestesByShopNameController };
