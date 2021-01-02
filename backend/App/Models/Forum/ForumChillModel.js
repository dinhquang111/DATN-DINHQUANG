const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ForumChillModel = new Schema({
    id_topic: {
        type: Schema.ObjectId,
        ref: 'topic',
    },
    id_category : {
        type: Schema.ObjectId,
        ref: 'Forum',
    },
    username: {
        type: String,
        required: true,
        max: 255
    },
    id_username: {
        type: String,
        required: true,
        max: 255
    },
    content: {
        type: String,
        required: true,
    },
    join: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('ChillTopic', ForumChillModel)