const NossaReforma = require('../model/materialSchema')

//CRUD --> CREATE - READ - UPDATE - DELETE
//POST - "/doacao"
const createDonations = async (req, res) => {
    try {
        const newDonation = new NossaReforma({
            //pode ser tb = await NossaReforma.create(req.body)
            //res.status normal
            _id: new mongoose.Types.ObjectId(),
            finalizado: req.body.finalizado,
            material: req.body.material,
            quantidadeDeMaterial: req.body.quantidadeDeMaterial,
            bairroRetirada: req.body.bairroRetirada,
            nome: req.body.nome,
            telefone: req.body.telefone
        })

        const donationSaved = await newDonation.save()
        res.status(201).json({
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
        const materials = await NossaReforma.find()
        res.status(200).json(materials)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//GET - "/buscar"
const getByMaterial = async (req, res) => {
    try {
        const findMaterial = await NossaReforma.findOne({"material": req.query.material})
    
        if(findMaterial){
            findMaterial.material = findMaterial.material
            res.status(200).send({
                message: 'Material encontrado! Veja a lista abaixo onde tem o que você precisa.',
                body: findMaterial
            })
        } else{
            res.status(404).send({
                message: 'Material não encontrado... Espero que possamos te ajudar numa próxima necessidade!'
            })
        }
        

    } catch (error) {
        res.status(400).json({
        message: error.message
        })
    }
}


//PUT /:id - "/atualiza"
const updateDonationsById = async (req, res) => {
    try {
        const findMaterial = await NossaReforma.findById(req.params.id)
        console.log(findMaterial)

        if(findMaterial){
            findMaterial.finalizado = req.body.finalizado || findMaterial.finalizado
            findMaterial.material = req.body.material || findMaterial.material
            findMaterial.quantidadeDeMaterial = req.body.quantidadeDeMaterial || findMaterial.quantidadeDeMaterial
            findMaterial.bairroRetirada = req.body.bairroRetirada || findMaterial.bairroRetirada
            findMaterial.nome = req.body.nome || findMaterial.nome
            findMaterial.telefone = req.body.telefone || findMaterial.telefone
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
        const doacaoFound = await NossaReforma.findById(req.params.id)

        await doacaoFound.delete()

        res.status(200).json({
            message: "Doação deletada com sucesso. Obrigada pela contibuição!"
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
    updateDonationsById,
    deleteDoacao,
    getByMaterial
}