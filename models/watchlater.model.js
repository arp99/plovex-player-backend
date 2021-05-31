const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const watchlaterSchema = new Schema({
    wactchlater: [{ type: Schema.Types.ObjectId ,  }]
})

const watchlaterVideo = model( 'watchlaterVideo', watchlaterSchema )
module.exports = { watchlaterVideo }