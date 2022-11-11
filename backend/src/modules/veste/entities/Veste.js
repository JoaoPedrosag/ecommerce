import mongoose from 'mongoose';
const { Schema } = mongoose;

const VesteSchema = new Schema({
    descricao: String,
    valor: Schema.Types.Decimal128,
    tamanhos: [String],
    images: [String],
    discurso_venda: String,
    estoque: Number,
    updated_at: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now },
});

export const Veste = mongoose.model('veste', VesteSchema);