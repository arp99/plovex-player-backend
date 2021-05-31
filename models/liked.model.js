const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const likedVideosSchema = new Schema({
    videos : [{ type:Schema.Types.ObjectId , ref: 'videos' }]
})

const likedVideo = model( 'like', likedVideosSchema )
module.exports = { likedVideo }