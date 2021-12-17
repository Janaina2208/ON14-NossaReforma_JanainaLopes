const express = require('express')
const router = express.Router()

const controller = require('../controller/donorController')
const { checkAuth } = require('../middlewares/auth')

//GET /todos - "/todos"
router.get("/todos", checkAuth, controller.getAll)
//criar conta de doadores
router.post("/criarconta", controller.createDonor)
//login
router.post("/logindoador", controller.login)

module.exports = router