class ListVestesByShopNameService {
    vesteRepository;

    constructor(vesteRepository) {
        this.vesteRepository = vesteRepository;
    }

    execute(shop_name) {
        if (!shop_name) {
            throw new AppError('shop_name are required');
        }
        return this.vesteRepository.listVestesByShopName(shop_name);
    }
}

export { ListVestesByShopNameService };