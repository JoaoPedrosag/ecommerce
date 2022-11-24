class ListShopNameService {
    userRepository;

    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    execute() {
        return this.userRepository.listShops();
    }
}

export { ListShopNameService };