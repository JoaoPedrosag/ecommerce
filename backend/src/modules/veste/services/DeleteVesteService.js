import AppError from "../../../shared/errors/AppError.js";

class DeleteVesteService {
    vesteRepository;

    constructor(vesteRepository) {
        this.vesteRepository = vesteRepository;
    }
    
    async execute(id) {
        const vesteExist = await this.vesteRepository.findById(id);
        if (!vesteExist) {
            throw new AppError('Hero não existe');
        }
        return await vesteExist.remove();
    }
}

export { DeleteVesteService };