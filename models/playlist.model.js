const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const playlistSchema = new Schema({
    playlistName: { type : String , required: true , unique : true , lowercase: true , trim: true },
    videos : [{ type: Schema.Types.ObjectId , ref: 'video' }]
}, { timestamps: true});

const playlist = model('playlist' , playlistSchema)
module.exports = { playlist }