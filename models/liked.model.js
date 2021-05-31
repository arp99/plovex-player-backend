const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const likedVideosSchema = new Schema({
    _id :{ type : Schema.Types.ObjectId , ref: 'video'}
})

const likedVideo = model( 'like', likedVideosSchema )
module.exports = { likedVideo }