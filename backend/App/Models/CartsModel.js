const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaOrder = {
    quantity: {
        type: Number,
        required: true,
        max: 255,
    },
    id_brands: {
        type: Schema.ObjectId,
        ref: 'brands',
    },
    id_origins: {
        type: Schema.ObjectId,
        ref: 'origins'
    },
    id_pets: {
        type: Schema.ObjectId,
        ref: 'pets'
    },
    id_category: {
        type: Schema.ObjectId,
        ref: 'category'
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: ""
    },
    content: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    _id: {
        type: String,
        required: true,
    }
};

var CartsSchema = new Schema({
    ordername: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    numberphone: {
        type: Number,
        required: true,
    },
    order: [ schemaOrder ],
    created: {
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model('cart', CartsSchema)