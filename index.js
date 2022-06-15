// config inicial
const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
const app = express()

// forma de ler JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//rotas da API
const personRoutes = require("./routes/personRoutes")

app.use("/person", personRoutes)

// rota inicial / endpoint
app.get("/", (req, res) => {
    // mostrar req
    
    res.json({ message: "Oi Express!"})
})

// entregar uma porta
mongoose.connect(process.env.MONGO_SECRET)

.then(() => {
    console.log("Conectamos ao MongoDB!")
    app.listen(3000)
})
.catch((err) => console.log(err))