const Order = require('../models/order')

const addOrder = async (req,res) => {
    try {
        const newOrder = await Order.create(req.body)
        res.status(200).json({newOrder}) 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getOrders = async (req,res) => {
    try{
        const allOrders = await Order.find({})
        res.status(200).json({allOrders})
    }catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    addOrder,
    getOrders
}