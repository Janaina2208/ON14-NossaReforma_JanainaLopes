const mongoose = require('mongoose')
const materialSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    finished: {
        type: Boolean,
        required: true
    },
    // Sugestão: no seu banco possuir apenas um campo de "material" e, no frontend, 
    // as opções serem adicionadas. Para cada material a ser doado, a pessoa deve fazer uma solicitação 
    // e isso terá um registro no banco
    material: {
        type: String,
        required: true,
        lowercase: true
    },
    qtyMaterial: {
        type: String,
        default: true
    },
    district: {
        type: String,
        required: true
    },
    donor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donor"
    },
    phone: {
        type: String,
        required: true
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


//IDEIA INICIAL DE SCHEMA E ARRANJO DA API
// Cadastro de quem vai doar.
// Com a lista do material
// Cadastro de quem vai receber a doação

// -- parametros
// finalizado: boolean
// material para doar:boolean por itens
// material que preciso: boolean por itens
// outros materiais: [String]
// Quantidade de material: String
// bairro: String
// nome: String
// telefone: String
