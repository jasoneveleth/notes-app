const express = require('express')
const app = express()

const PORT = 3000
const api = require("./api")

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.use('/api', api)

app.listen(PORT, ()=>console.log(`Running server on port ${PORT}`))
