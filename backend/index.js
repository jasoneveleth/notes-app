const express = require('express')
const app = express()

const PORT = 3000
const api = require("./api")
const vue = "../view/dist"

app.use('/api', api)
app.use(express.static(vue));

app.listen(PORT, ()=>console.log(`Running server on port ${PORT}`))

app.get('/', function (req, res) {
    res.sendFile("index.html", {root: vue})
})