//1
const app = require('./src/app')
//2
const PORT = process.env.PORT
//3
app.listen(PORT, ()=>console.log(`Servidor está rodando na porta ${PORT}`))
