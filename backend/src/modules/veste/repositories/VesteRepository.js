import { Veste } from '../entities/Veste.js';

class VesteRepository {

    async create({ descricao, valor, tamanhos, images, discurso_venda, estoque }) {
        const veste = new Veste({ 
            descricao,
            valor,
            tamanhos,
            images,
            discurso_venda,
            estoque 
        });

        return await veste.save();
    }

    async list() {
        const computadores = await Veste.find({});
        return computadores;
    }

    async findByDescricao(descricao) {
        const veste = Veste.findOne({ descricao });
        return veste;
    }

    async findById(id) {
        const veste = await Veste.findById(id).exec();
        return veste;
    }

    async findByIdAndUpdate(id, { descricao, valor, tamanhos, images, discurso_venda, estoque }) {
        const veste = await Veste.findByIdAndUpdate(id, { descricao, valor, tamanhos, images, discurso_venda, estoque });
        return veste
    }

    async findByIdAndRemove(id) {
        const veste = await Veste.findByIdAndRemove(id);
        return veste
    }
}

export { VesteRepository };