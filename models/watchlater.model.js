const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const watchlaterSchema = new Schema({
    _id : { type: Schema.Types.ObjectId , ref: 'video'}
})

const watchlaterVideo = model( 'watchlaterVideo', watchlaterSchema )
module.exports = { watchlaterVideo }