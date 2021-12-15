//11
const express = require('express')
const router = express.Router()

const controller = require('../controller/materialController')

//GET /todos - "/todos"
router.get("/todos", controller.getAll)
//GET - "/buscar"
router.get("/buscar", controller.getByMaterial)
//POST - "/doacao"
router.post("/doacao", controller.createDonations)
//PUT /:id - "/atualiza"
router.patch("/atualiza/:id", controller.updateDonationsById)
//DELETE /:id - "/delete"
router.delete("/remove/:id", controller.deleteDoacao)

module.exports = router