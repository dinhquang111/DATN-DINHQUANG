const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ForumTopicModel = new Schema({
    username: {
        type: String,
        required: true,
        max : 255,
    },
    id_username: {
        type: String,
        required: true,
        max: 255
    },
    views :{
        type : Number,
        default :0
    },
    title : {
        type :String,
        required : true,
        max : 255,
    },
    content : {
        type : String,
        required: true,
    },
    id_category : {
        type: Schema.ObjectId,
        ref: 'Forum',
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
module.exports = mongoose.model('topic',ForumTopicModel)