const express = require('express')
const { addOrder, getOrders} = require('../controllers/orderController')

const router = express.Router()

//post new order
router.post('/', addOrder)


//get all orders
router.get('/', getOrders)

module.exports = router
