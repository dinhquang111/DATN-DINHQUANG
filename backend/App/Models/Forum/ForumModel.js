const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ForumSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    id_parents:{
        type: String,
        max: 255,
        min: 6,
        default:0,
    }
})
module.exports = mongoose.model('Forum',ForumSchema)