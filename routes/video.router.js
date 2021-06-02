const express = require('express')
const router = express.Router()
const { video } = require('../models/video.model.js')

//fetch all videos from db
router.route("/")
    .get( async( req , res) =>{
        try{
            const videoData = await video.find({})
            res.json({ sucess : true , videoData })
        }catch(err){
            res.json({ sucess : false , message: 'Unable to fetch videos' , errorMessage: err.message })
        }
    })
    .post( async ( req , res ) =>{ //save video to database
        try{
            const videoToSave = req.body;
            const savedVideo = await video.create(videoToSave)
            res.json({ sucess : true , video: savedVideo , message: 'Video saved successfully'})
        }catch(err){
            res.json({ success : false , message: 'Unable to save video' , errorMessage: err.message })
        }
    })

router.route("/v/:videoId")
    .get( async ( req , res )=>{
        try{
            const { videoId } = req.params
            const videoFound = await video.find({videoId: videoId})
            res.json({ success : true , video: videoFound })
        }catch(err){
            res.json({ success : false , message: 'Unable to fetch video' , errorMessage : err.message })
        }
    })

module.exports = router