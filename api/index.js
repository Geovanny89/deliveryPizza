const express = require("express")

const app = express();

app.use(express.json());


const PORT = process.env.PORT || 3001

app.use('/api', require('./src/routes'))

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}` )
})

require('./src/database/db.js')
