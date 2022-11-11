class ListVestesService {
    vesteRepository;

    constructor(vesteRepository) {
        this.vesteRepository = vesteRepository;
    }

    execute() {
        return this.vesteRepository.list();
    }
}

export { ListVestesService };