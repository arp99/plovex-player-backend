const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const playlistSchema = new Schema({
    playlistId: { type: String , required: true  },
    playlistName: { type : String , required: true },
    videos: [{ type: Schema.Types.ObjectId , ref: 'video' }] // have reference to the video collection, not only store the ids
}, { timestamps: true});

const playlist = model('playlist' , playlistSchema)
module.exports = { playlist }