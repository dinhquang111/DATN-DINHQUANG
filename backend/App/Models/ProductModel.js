const mongoose = require('mongoose')
const Schema = mongoose.Schema

var ProductSchema = new Schema({
    id_brands : {
        type : Schema.ObjectId,
        ref : 'brands',
        // default:null
    },
    id_origins:{
        type : Schema.ObjectId,
        ref: 'origins'
    },
    id_pets:{   
        type:Schema.ObjectId,
        ref:'pets'
    },
    id_category :{
        type:Schema.ObjectId,
        ref:'category'
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        default:""
    },
    content:{
        type:String,
        required:true,
    },
    weight : {
        type:String,
        required:true,
    },
    price : {
        type:String,
        required:true,
    }
})
module.exports = mongoose.model('products',ProductSchema)