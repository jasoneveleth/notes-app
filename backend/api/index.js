const express = require('express')
const fs      = require('fs')
const router  = express.Router()
const os = require("os")
const path = require('path');

const NOTESDIRECTORY = path.join(os.homedir(), 'notes')

router.use(express.json())

router.get('/list', (req, res) => {
    const mystat = (filename) => {
        const stat = fs.statSync(path.join(NOTESDIRECTORY, filename))
        return {
            size: stat.size,
            atime: stat.atime,
            mtime: stat.mtime,
            birthtime: stat.birthtime
        }
    }

    const filenames = fs.readdirSync(NOTESDIRECTORY)
    const file_list = filenames.filter((f) => f.split('.').pop() == "md")
                                .map((ele) => {return {filename: ele, stat: mystat(ele)}})
    // inplace:
    file_list.sort((ele, ele2) => { return Date.parse(ele2.stat.mtime) - Date.parse(ele.stat.mtime)})
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