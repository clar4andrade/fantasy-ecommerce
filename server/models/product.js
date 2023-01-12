const mongoose = require('mongoose')

const Schema = mongoose.Schema

const typeSchema = new Schema({
    name: { type: String, required: true },
    qty: { type: Number, required: true }
})

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: [typeSchema],
    universe: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema)