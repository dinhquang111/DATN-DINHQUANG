const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : {
        type: String,
        required: true,
        max: 255,
        min : 6
    },
    password : {
        type: String,
        required: true,
        max: 1024,
        min:6,
    },
    name : {
        type: String,
        required: true
    },
    numberphone: {
        type: Number,
        default:0,
    },
    level : {
        type: Number,
        max:10,
        default: 1
    },
    created: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('users', UserSchema)