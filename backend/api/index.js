const express = require('express')
const fs      = require('fs')
const router  = express.Router()
const os = require("os")
const path = require('path');

const NOTESDIRECTORY = path.join(os.homedir(), 'notes')

router.use(express.json())

router.get('/list', (req, res) => {
    const filenames = fs.readdirSync(NOTESDIRECTORY)
    const file_list = filenames.filter((f) => f.split('.').pop() == "md")
                                .map((ele) => {return {filename: ele, stat: fs.statSync(path.join(NOTESDIRECTORY, ele))}})
    res.send({files: file_list})
})

router.get('/contents', (req, res) => {
    const filename = req.query.filename 
    try{
        res.sendFile(filename, {root: NOTESDIRECTORY})
    }catch{
        res.send({error:`file failed to open ${filename}`})
    }
})

router.get('/append', (req, res) => {
    const filename = path.join(NOTESDIRECTORY, req.query.filename)
    console.log("appending to:", filename)
    const content  = req.query.contents
    try{
       fs.appendFileSync(filename, content)
       res.send({"status":"ok"})
    }catch(err){
        console.log(err)
        res.send({error:`file failed to append to ${filename}`})
    }
})
  
module.exports = router