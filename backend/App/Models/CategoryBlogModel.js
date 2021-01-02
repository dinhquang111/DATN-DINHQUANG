const mongoose = require('mongoose')
const Schema = mongoose.Schema

var CategoryBlogSchema = new Schema({
    name : {
        type:String,
        required : true,
        max : 255,
        min : 6
    },
    created: { 
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('categoryblog',CategoryBlogSchema)
