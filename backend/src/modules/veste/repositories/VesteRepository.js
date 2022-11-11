import { Veste } from '../entities/Veste.js';

class VesteRepository {

    async create({ descricao, valor, tamanhos, images, discurso_venda, estoque , shop_name}) {
        const veste = new Veste({ 
            descricao,
            valor,
            tamanhos,
            images,
            discurso_venda,
            estoque,
            shop_name
        });

        return await veste.save();
    }

    async list() {
        const vestes = await Veste.find({});
        return vestes;
    }

    async findByDescricao(descricao) {
        const veste = Veste.findOne({ descricao });
        return veste;
    }

    async findById(id) {
        const veste = await Veste.findById(id).exec();
        return veste;
    }

    async findByIdAndUpdate(id, { descricao, valor, tamanhos, images, discurso_venda, estoque , shop_name}) {
        const veste = await Veste.findByIdAndUpdate(id, { descricao, valor, tamanhos, images, discurso_venda, estoque , shop_name});
        return veste
    }

    async findByIdAndRemove(id) {
        const veste = await Veste.findByIdAndRemove(id);
        return veste
    }

    async listVestesByShopName(shop_name){
        const vestes = await Veste.find({shop_name});
        return vestes;
    }
}

export { VesteRepository };