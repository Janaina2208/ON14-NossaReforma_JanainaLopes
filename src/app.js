require('dotenv-safe').config()
const express = require('express')
const cors = require('cors')
const database = require('./database/config')
const materialRoutes = require('./routes/materialRoutes')
const index = require("./routes/index.js")
const benefitedRoutes = require("./routes/benefitedRoutes")
const donorRoutes = require("./routes/donorRoutes")
const app = express()

database.connect()

app.use(cors())
app.use(express.json())

app.use("/nossareforma", materialRoutes)
app.use("/", index)
app.use("/beneficiados", benefitedRoutes)
app.use("/doadores", donorRoutes)



module.exports = app
