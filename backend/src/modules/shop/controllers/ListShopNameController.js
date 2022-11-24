class ListShopNameController {
    listShopNameService

    constructor(listShopNameService) {
        this.listShopNameService = listShopNameService;
    }

    async handle(request, response) {
        const shops = await this.listShopNameService.execute();
        return response.json(shops);
    }
}

export { ListShopNameController };
