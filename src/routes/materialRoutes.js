const express = require('express')
const router = express.Router()

const controller = require('../controller/materialController')
const { checkAuth } = require('../middlewares/auth')

//GET /todos - "/todos"
router.get("/todos", controller.getAll)
//GET - "/buscar"
router.get("/buscar", checkAuth, controller.getByMaterial)
//POST - "/doacao"
router.post("/doacao", checkAuth, controller.createDonations)
//PUT /:id - "/atualiza"
router.patch("/atualiza/:id", checkAuth, controller.updateDonationsById)
//DELETE /:id - "/delete"
router.delete("/remove/:id", checkAuth, controller.deleteDoacao)

module.exports = router