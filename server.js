const express = require('express')
const app = express()
const port = 2243

const mongoose = require('mongoose')
const url = "mongodb://localhost/chatappDB"

mongoose.connect(url).then(()=>{
    console.log("Connected..................")
}).catch(()=>{
    console.log("Failed to connectS")
})


 
app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})