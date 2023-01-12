const Product = require('../models/product')
const mongoose = require('mongoose')

const getProducts = async (req,res) => {
    
    try{
        const products = await Product.find({})

        res.status(200).json({products})
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

const getProduct = async (req,res) => {
    
    const { id } = req.params

    try{
        const product = await Product.findById(id)

        res.status(200).json({product})
    } catch (error){
        res.status(400).json({error: error.message})
    }
}


const addProduct = async (req,res) => {

    try{
        const productSent = await Product.create(req.body)

        res.status(200).json({productSent})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getProducts,
    getProduct,
    addProduct
}