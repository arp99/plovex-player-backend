const express = require('express')
const cors = require('cors')

const { connectToDb } = require('./config/db.connect.js')

//initialize the app
const app = express()
app.use(cors())

//establish connection to the DB
connectToDb()

// home route
app.get("/",(req , res)=>{
    res.send("Hello from other side")
})


app.listen(3000 , ()=>{
    console.log("Server started")
})