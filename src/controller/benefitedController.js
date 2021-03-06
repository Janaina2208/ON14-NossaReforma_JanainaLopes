const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Benefited = require('../model/benefitedSchema')
const {hashPassword} = require('../helpers/auth')

const getAll = async (req, res) => {
    try {
        const benefited = await Benefited.find()
        res.status(200).json({messagem: "Lista de pessoas", benefited})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const createBenefited = async(req,res)=>{
    const {name, email, password} = req.body
    try {
        const newBenefited = new Benefited({
            name,
            email,
            password
        })

    if(!name || !email || !password){
            return res.status(400).json({
                error: 'Gentileza verificar, item obrigatório não inserido.'
            })
    }
    //tratando o password para criptografia. autenticação
        const passwordHashed = await hashPassword(newBenefited.password, res)
        
        newBenefited.password = passwordHashed

        const saveBenefited = await newBenefited.save()
        saveBenefited.password = undefined //"apaga" no postman o retorno do campo senha

        res.status(201).json({
            messagem: "Pessoa cadastrada com sucesso",
            saveBenefited
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
//para puxar informações do banco
    try {
        const benefited = await Benefited.findOne({email:email}) //procura usuario q tenha email

        if(!benefited){
            return res.status(422).send({message:"Não encontramos seu nome no cadastro"})
        }
        //verificar a senha e comparar a enviada com a do banco
        const checkPassword = await bcrypt.compare(password, benefited.password)

        if(!checkPassword){
            return res.status(422).send({message: "Senha incorreta!"})
        }
        const secret = process.env.SECRET
        const token = jwt.sign({id: benefited._id}, secret)

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
//o token coloca no autorization
module.exports = {
    getAll,
    createBenefited,
    login
}