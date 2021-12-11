const mongoose = require('mongoose')

// const MONGODB_URI = process.env.MONGODB_URI  ---> TODAS AS VEZES Q COLOQUEI ASSIM DEU RUIM

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco de dados conectado ao MONGODB!")
    } catch(error){
        console.log(error)
    }
}

module.exports = {
    connect
}