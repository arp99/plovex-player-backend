const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const playlistSchema = new Schema({
    playlistId: { type: String , required: true  },
    playlistName: { type : String , required: true },
    _id : { type: Schema.Types.ObjectId , ref: 'video' }
}, { timestamps: true});

const playlist = model('playlist' , playlistSchema)
module.exports = { playlist }