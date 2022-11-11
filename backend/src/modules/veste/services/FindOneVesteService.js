class FindOneVesteService {
    vesteRepository;

    constructor(vesteRepository) {
        this.vesteRepository = vesteRepository;
    }

    execute(id) {
        return this.vesteRepository.findById(id);
    }
}

export { FindOneVesteService };