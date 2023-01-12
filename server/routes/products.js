const express = require('express')
const { getProducts, getProduct, addFavorite, addProduct } = require('../controllers/productsController')

const router = express.Router()

//get all products
router.get('/', getProducts)

//get a single product
router.get('/:id', getProduct)

//create product
router.post('/add', addProduct)


module.exports = router