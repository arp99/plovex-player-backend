const mongoose = require('mongoose')
const { Schema, model } = mongoose

const historySchema =  new Schema({
    videos: [{ type: Schema.Types.ObjectId , ref: 'video' }]
})

const history = model( 'history' , historySchema )
module.exports = { history }