const mongoose = require('mongoose');
const Schema = mongoose.Schema

var OriginsSchema = new Schema({
   
    name :{
        type: String,
        required: true,
        max : 255,
        min : 6
    }
}) 
module.exports = mongoose.model('origins',OriginsSchema)