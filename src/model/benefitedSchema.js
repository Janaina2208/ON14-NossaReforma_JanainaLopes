const mongoose = require('mongoose')
const benefitedSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
}, {timestamps: true})

const Benefited = mongoose.model('Benefited', benefitedSchema)

module.exports = Benefited