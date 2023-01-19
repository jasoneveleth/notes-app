const express = require('express')
const app = express()
const cors = require("cors")
app.use(cors())

const PORT = process.env.PORT || 25565;
const api = require("./api")
const vue = "../view/dist"

app.use('/api', api)
app.use(express.static(vue));

app.listen(PORT, ()=>console.log(`Running server on port ${PORT}`))

app.get('/', function (req, res) {
    res.sendFile("index.html", {root: vue})
})
