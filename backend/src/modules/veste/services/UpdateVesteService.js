import AppError from "../../../shared/errors/AppError.js";

class UpdateVesteService {
    vesteRepository;

    constructor(vesteRepository) {
        this.vesteRepository = vesteRepository;
    }
    
    async execute(id, { descricao, valor, tamanhos, images, discurso_venda, estoque }) {
        const vesteExist = await this.vesteRepository.findById(id);
        if (!vesteExist) {
            throw new AppError('Veste não existe');
        }
        
        vesteExist.descricao = descricao;
        vesteExist.valor = valor;
        vesteExist.tamanhos = tamanhos;
        vesteExist.images = images;
        vesteExist.discurso_venda = discurso_venda;
        vesteExist.estoque = estoque;
        vesteExist.updated_at = Date.now();
        vesteExist.__v = vesteExist.__v + 1;

        return await vesteExist.save();
    }
}

export { UpdateVesteService };