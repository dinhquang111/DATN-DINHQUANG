const mongoose = require('mongoose')
const Schema = mongoose.Schema

var BrandsSchema = new Schema({
    name : {
        type:String,
        required : true,
        max : 255,
        min : 6
    },
    introduction :{
        type : String,
        required:true,
        max : 1024,
        min : 6
    },
    context : {
        type : String,
        require: true
    } 

})
module.exports  = mongoose.model('brands',BrandsSchema)