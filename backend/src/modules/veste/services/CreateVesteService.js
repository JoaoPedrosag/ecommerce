import AppError from "../../../shared/errors/AppError.js";

class CreateVesteService {
    vesteRepository;

    constructor(vesteRepository) {
        this.vesteRepository = vesteRepository;
    }
    
    async execute({ descricao, valor, tamanhos, images, discurso_venda, estoque }) {
        const vesteAlreadyExist = await this.vesteRepository.findByHostname(hostname);
        if (vesteAlreadyExist) {
            throw new AppError('Já existe uma veste com essa descrição');
        }

        return await this.vesteRepository.create({ descricao, valor, tamanhos, images, discurso_venda, estoque });
    }
}

export { CreateVesteService };