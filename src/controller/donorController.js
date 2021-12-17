const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Donor = require('../model/donorsSchema')
const {hashPassword} = require('../helpers/auth')

const getAll = async (req, res) => {
    try {
        const donor = await Donor.find()
        res.status(200).json({messagem: "Lista de pessoas", donor})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const createDonor = async(req,res)=>{
    const {name, email, password} = req.body
    try {
        const newDonor = new Donor({
            name,
            email,
            password
        })

    if(!name || !email || !password){
            return res.status(400).json({error: 'Gentileza verificar, item obrigatório não inserido.'})
    }
    //tratando o password para criptografia. autenticação
        const passwordHashed = await hashPassword(newDonor.password, res)
        
        newDonor.password = passwordHashed

        const saveDonor = await newDonor.save()
        saveDonor.password = undefined //"apaga" no postman o retorno do campo senha
        
        res.status(201).json({
            messagem: "Pessoa cadastrada com sucesso",
            saveDonor
        })
    
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
//autorização
const login = async(req,res)=>{
    const {email, password} = req.body

    try {
        const donor = await Donor.findOne({email:email}).select("+password")

        if(!donor){
            return res.status(422).send({message:"Não encontramos seu nome no cadastro"})
        }

        const checkPassword = await bcrypt.compare(password, donor.password)

        if(!checkPassword){
            return res.status(422).send({message: "Senha incorreta!"})
        }
        const secret = process.env.SECRET
        const token = jwt.sign({id: donor._id}, secret)

        res.status(200).json({
            message: "Token funcionandooooo!",
            token
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getAll,
    createDonor,
    login
}