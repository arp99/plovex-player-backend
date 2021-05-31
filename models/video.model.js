const mongoose = require('mongoose')
require('mongoose-type-url');
const { Schema, SchemaTypes, model } = mongoose;

const videoSchema = new Schema({

    videoId: { type: String, required: true },
    title: { type: String, required: true },
    thumbnail: { type: SchemaTypes.Url, required: true },
    videoUrl: { type: SchemaTypes.Url, required: true },
    channelName: { type: String , required: true },
    channelImageUrl: { type: SchemaTypes.Url, required: true },
    description: { type: String , required: true }
});

const video = model( 'video' , videoSchema )
module.exports = { video }