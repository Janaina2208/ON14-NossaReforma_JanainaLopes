const express = require('express')
const router = express.Router()

const controller = require('../controller/benefitedController')
const { checkAuth } = require('../middlewares/auth')

//GET /todos - "/todos"
router.get("/todos", checkAuth, controller.getAll)
//criar conta de beneficiado
router.post("/criar", controller.createBenefited)
//login
router.post("/login", controller.login)

module.exports = router