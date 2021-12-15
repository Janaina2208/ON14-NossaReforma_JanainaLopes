const mongoose = require('mongoose')
const materialSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    finalizado: {
        type: Boolean,
        required: true
    },
    // Sugestão: no seu banco possuir apenas um campo de "material" e, no frontend, 
    // as opções serem adicionadas. Para cada material a ser doado, a pessoa deve fazer uma solicitação 
    // e isso terá um registro no banco
    material: {
        type: String,
        required: true
    },
    quantidadeDeMaterial: {
        type: String,
        default: true
    },
    bairroRetirada: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true,
        unique: true
    },
    telefone: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps:true})

const NossaReforma = mongoose.model("nossaReforma", materialSchema)

module.exports = NossaReforma

// Finalizado: boolean,
// Material doação:boolean por itens,
// * Argamassas: Boolean,
// * Cimento: Boolean,
// * Fixadores: Boolean,
// * Madeiramento: Boolean,
// * Materiais hidráulicos: Boolean,
// * Materiais elétricos: Boolean,
// * Pisos e revestimentos: Boolean,
// * Telha: Boolean,
// * Tijolo: Boolean,
// * Tinta: Boolean,
// * Outros Materiais: [String]
// Quantidade de material: String
// Bairro para retirada: String
// Nome: String
// Telefone: String
