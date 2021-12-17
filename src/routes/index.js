const express = require("express")
const router = express.Router()

router.get("/", (req, res)=> {
    res.status(200).json({
        "titulo": "API de Doação de Materiais de Construção",
        "version": "1.0.0",
        "mensagem": "Criação de projeto final {Reprograma}",

    })
})

module.exports = router