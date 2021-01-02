const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogsSchema = new Schema({
    id_categoryblog: {
        type: Schema.ObjectId,
        ref: 'categoryblog',
    },
    title: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    introduction :{
        type : String,
        required:true,
        max : 1024,
        min : 6
    },
    image :{
        type:String,
        required : true,
    },
    context : {
        type : String,
        require: true
    },
    created: { 
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('blogs',BlogsSchema)