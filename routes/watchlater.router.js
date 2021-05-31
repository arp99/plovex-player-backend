const express = require('express')
const router = express.Router()
const { watchlaterVideo } = require('../models/watchlater.model')

router.route('/')
    .get( async ( req , res ) =>{
        try{ 
            let watchlaterVideos = await watchlaterVideo.find({}).populate('_id')
            watchlaterVideos = watchlaterVideos.map(item => ({...item._id._doc}))
            res.json({ success : true , watchlaterVideos })
        }catch(err){
            res.json({ succes : false , message: "Unable to fetch watchlater videos" , errorMessage: err.message})
        }
    })
    .post( async ( req , res ) =>{
        try{
            const videoToAdd = req.body
            const savedVideo = await watchlaterVideo(videoToAdd).save()
            res.json({ success : true , message: "Added to Watchlater" , savedVideo })
        }catch(err){
            res.json({ success: false , message: "Unable to add to Watchlater" , errorMessage: err.message })
        }
    })

module.exports = router