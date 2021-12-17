const NossaReforma = require('../model/materialSchema')

//CRUD --> CREATE - READ - UPDATE - DELETE
//POST - "/doacao"
const createDonations = async (req, res) => {
    try {
        const newDonation = new NossaReforma({
            //pode ser tb = await NossaReforma.create(req.body)
            //res.status normal
            finished: req.body.finished,
            material: req.body.material,
            qtyMaterial: req.body.qtyMaterial,
            district: req.body.district,
            donor: req.userId,
            phone: req.body.phone
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
        const materials = await NossaReforma.find().select("-phone") //.populate("donor")
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
        // const findMaterial = await NossaReforma.findById(req.userId)
        const findMaterial = await NossaReforma.findById(req.params.id)

        if(findMaterial){
            findMaterial.finished = req.body.finished || findMaterial.finished
            findMaterial.material = req.body.material || findMaterial.material
            findMaterial.qtyMaterial = req.body.qtyMaterial || findMaterial.qtyMaterial
            findMaterial.district = req.body.district || findMaterial.district
            findMaterial.phone = req.body.phone || findMaterial.phone
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

        res.status(200).json({ //não coloquei 204 pq queria retornar msg
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