const express = require('express')
const router = express.Router()
const { history } = require('../models/history.model')

router.route('/')
    .get( async ( req , res ) =>{
        try{ 
            let videosInHistory = await history.find({}).populate('_id')
            videosInHistory = videosInHistory.map(item => ({...item._id._doc}))
            res.json({ success : true , history : videosInHistory })
        }catch(err){
            res.json({ succes : false , message: "Unable to fetch History" , errorMessage: err.message})
        }
    })
    .post( async ( req , res ) =>{
        try{
            const videoToAdd = req.body
            const savedVideo = await history(videoToAdd).save()
            res.json({ success : true , message: "Added to Watch history" , savedVideo })
        }catch(err){
            res.json({ success: false , message: "Unable to add to watch history" , errorMessage: err.message })
        }
    })
    .delete( async ( req , res )=>{
        try{
            const videoIdToRemove = req.body
            const deletedVideoId = await history.findOneAndDelete({ _id : videoIdToRemove._id })
            res.json({ success : true , message: "Successfully removed video from History" , deletedVideoId })
        }catch(err){
            res.json({ success : false , message:"Unable to remove video from history" , errorMessage : err.message })
        }
    })

module.exports = router