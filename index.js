const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { connectToDb } = require('./config/db.connect.js')

// routes 
const videos     = require('./routes/video.router')
const liked      = require('./routes/liked.router')
const watchlater = require('./routes/watchlater.router')
const history    = require('./routes/history.router')
const playlist   = require('./routes/playlist.router')

//initialize the app
const app = express()
app.use(cors())
app.use(bodyParser.json())
connectToDb()

app.use('/videos' , videos )
app.use('/liked-videos' , liked )
app.use('/watchlater' , watchlater )
app.use('/history' , history )
app.use('/playlists' , playlist )

// home route
app.get("/",(req , res)=>{
    res.send("Hello from other side")
})


app.listen(3000 , ()=>{
    console.log("Server started")
})