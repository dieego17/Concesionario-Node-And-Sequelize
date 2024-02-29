const express = require('express')
const app = express()
const bodyParse = require('body-parser')

const sequelize = require('./database/db')

require('./database/assosiations')

app.use(express.json())
app.use(bodyParse.urlencoded({ extended: true }))

const router = require('./routes/approutes')
app.use("/", router)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el ${PORT} 😎`)

    sequelize
    .sync({ force: false })
    .then(() => console.log('Concexión con la base de datos realizada con éxito 👌👌'))
    .catch((error) => console.log('Error '+error+' ❌❌'))
})