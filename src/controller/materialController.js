const MaterialSchema = require('../model/materialSchema')

const mongoose = require('mongoose')
//CRUD --> CREATE - READ - UPDATE - DELETE
//POST - "/doacao"
const createDonations = async (req, res) => {
    try {
        const newDonation = new MaterialSchema({
            _id: new mongoose.Types.ObjectId(),
            finalizado: req.body.finalizado,
            material: req.body.material,
            quantidadeDeMaterial: req.body.quantidadeDeMaterial,
            bairroRetirada: req.body.bairroRetirada,
            nome: req.body.nome,
            telefone: req.body.telefone
        })

        const donationSaved = await newDonation.save()
        res.status(200).json({
            message: "Doação adicionada com sucesso! Gratidão!",
            donationSaved
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//GET /todos - "/todos"
const getAll = async (req, res) => {
    try {
        const materials = await MaterialSchema.find()
        res.status(200).json(materials)
    } catch (error) {
        res.status(500).json({
            messagem:error.message
        })
    }
}

//GET /:id - "/material"
// const materialByName = (req, res) => {
//     const {Argamassas, Cimento, Fixadores, Madeiramento, materiaisHidraulicos, materiaisEletricos, pisosERevestimentos, Telha, Tijolo, Tinta, outrosMateriais} = req.query
//     try{
//         Roles
//             .findOne({
//                 Argamassas,
//                 Cimento,
//                 Fixadores,
//                 Madeiramento,
//                 materiaisHidraulicos,
//                 materiaisEletricos,
//                 pisosERevestimentos,
//                 Telha,
//                 Tijolo,
//                 Tinta,
//                 outrosMateriais,
//                 active: true
//             },
//             then(data => {
//                 res.status(200).send({
//                     message: 'Material encontrado! Veja a listagem abaixo!',
//                     body: data
//                 })
//             }))
//     } catch(error) {
//             response.status(400).json({
//                 message:error.message
//             })
//     }

const getByMaterial = async (req, res) => {
    try {
        const materialFound = req.query.material;
        const donation = await MaterialSchema.find({materialFound})
    console.log(materialFound)
        return res.status(200).send({
            message: 'Material encontrado! Veja a listagem abaixo!',
            body: donation
        })
    } catch(error) {
        return res.status(400).json({
            message:error.message
        })
    }
}

    // const {Argamassas, Cimento, Fixadores, Madeiramento, materiaisHidraulicos, materiaisEletricos, pisosERevestimentos, Telha, Tijolo, Tinta} = req.query
    //     try{
    //         const materialFound = await MaterialSchema.find({
    //                 Argamassas,
    //                 Cimento,
    //                 Fixadores,
    //                 Madeiramento,
    //                 materiaisHidraulicos,
    //                 materiaisEletricos,
    //                 pisosERevestimentos,
    //                 Telha,
    //                 Tijolo,
    //                 Tinta,
    //                 active: true
    //             })
    //                 res.status(200).send({
    //                     message: 'Material encontrado! Veja a listagem abaixo!',
    //                     body: materialFound
    //                 })
    //             }
                
                
    //     catch(error) {
    //             res.status(400).json({
    //                 message:error.message
    //             })
    //     }
    

//PUT /:id - "/atualiza"
const updateDoacoesById = async (req, res) => {
    try {
        const findMaterial = await MaterialSchema.findById(req.params.id)
        console.log(findMaterial)

        if(findMaterial){
            findMaterial.Finalizado = req.body.Finalizado || findMaterial.Finalizado
            findMaterial.Argamassas = req.body.Argamassas || findMaterial.Argamassas
            findMaterial.Cimento = req.body.Cimento || findMaterial.Cimento
            findMaterial.Fixadores = req.body.Fixadores || findMaterial.Fixadores
            findMaterial.Madeiramento = req.body.Madeiramento || findMaterial.Madeiramento
            findMaterial.materiaisHidraulicos = req.body.materiaisHidraulicos || findMaterial.materiaisHidraulicos
            findMaterial.materiaisEletricos = req.body.materiaisEletricos || findMaterial.materiaisEletricos
            findMaterial.pisosERevestimentos = req.body.pisosERevestimentos || findMaterial.pisosERevestimentos
            findMaterial.Telha = req.body.Telha || findMaterial.Telha
            findMaterial.Tijolo = req.body.Tijolo || findMaterial.Tijolo
            findMaterial.Tinta = req.body.Tinta || findMaterial.Tinta
            findMaterial.outrosMateriais = req.body.outrosMateriais || findMaterial.outrosMateriais
            findMaterial.quantidadeDeMaterial = req.body.quantidadeDeMaterial || findMaterial.quantidadeDeMaterial
            findMaterial.Telefone = req.body.Telefone || findMaterial.Telefone
        }
        const savedDoacao = await findMaterial.save()
        // console.log('APÓS ATUALIZAR', savedDoacao)

        res.status(200).json({
            message: "Dados atualizados com sucesso!",
            savedDoacao
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
//DELETE /:id - "/delete"
const deleteDoacao = async (req, res) => {
    try {
        const doacaoFound = await MaterialSchema.findById(req.params.id)

        await doacaoFound.delete()

        res.status(200).json({
            message: doacaoFound.Nome + "Doação deletada com sucesso. Obrigada pela contibuição!"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    getAll,
    createDonations,
    updateDoacoesById,
    deleteDoacao,
    getByMaterial
}