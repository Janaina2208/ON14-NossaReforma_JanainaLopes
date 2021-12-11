//4
const express = require('express')
//5
const cors = require('cors')
const dotenv = require('dotenv')
const database = require('./database/config')
//6
const app = express()

const materialRoutes = require('./routes/materialRoutes')
const index = require("./routes/index.js")
//7
app.use(cors())
app.use(express.json())

app.use("/nossareforma", materialRoutes)
app.use("/", index)

dotenv.config()

database.connect()
//8
module.exports = app
