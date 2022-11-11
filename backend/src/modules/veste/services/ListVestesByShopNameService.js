class ListVestesByShopNameService {
    vesteRepository;

    constructor(vesteRepository) {
        this.vesteRepository = vesteRepository;
    }

    execute(shop_name) {
        return this.vesteRepository.listVestesByShopName(shop_name);
    }
}

export { ListVestesByShopNameService };