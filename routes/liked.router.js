const express = require('express')
const router= express.Router()
const { likedVideo } = require('../models/liked.model')

router.route('/')
    .get( async ( req , res )=>{ //fetch all liked videos
        try{
            let likedVideos = await likedVideo.find({}).populate("_id")
            likedVideos = likedVideos.map(item => ({ ...item._id._doc}))
            res.json({ success : true, likedVideos})
        }catch(err){
            res.json({ success : false , message:'Unable to fetch liked videos' , errorMessage : err.message})
        }
    })
    .post( async ( req , res )=>{
        try{
            const videoToAdd = req.body 
            const savedVideo = await likedVideo(videoToAdd).save()
            res.json({ success : true , message: "Added to liked videos" , savedVideo})
        }catch(err){
            res.json({ success : false , message: "Unable to add to liked videos" , errorMessage: err.message})
        }
    })

module.exports = router