const mongoose = require('mongoose')
const donorSchema = new mongoose.Schema({
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
        required: true,
        select: false
    }
}, {timestamps: true})

const Donor = mongoose.model('Donor', donorSchema)

module.exports = Donor
