const express = require('express')
const app = express()
const os = require('os')
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 25565;
const api = require("./api")
const frontend_dir = "../view/dist"
const images_dir = path.join(os.homedir(), "notes", "images")

app.use(cors())

app.use('/api', api)
app.use(express.static(frontend_dir))
app.use('/images', express.static(images_dir))

app.listen(PORT, ()=>console.log(`Running server on port ${PORT}`))

app.get('/', function (req, res) {
    res.sendFile("index.html", {root: vue})
})
