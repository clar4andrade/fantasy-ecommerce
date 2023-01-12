const express = require('express')
const { userLogin, userSignup, getUser, addFavorite} = require('../controllers/userController')

const router = express.Router()

//signup route
router.post('/signup', userSignup)

//login route
router.post('/login', userLogin)

//get user profile
router.get('/:id', getUser)

//add favorite
router.patch('/:id', addFavorite)



module.exports = router