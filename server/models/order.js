const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cartSchema = new Schema({
    prod_id: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
})

const orderSchema = new Schema({
    products: [cartSchema],
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)