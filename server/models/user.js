const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

//favorite Schema
const favoriteSchema = new Schema({ prod_id: { type: String } })

//creating user schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    favorite: [favoriteSchema]
}, { timestamps: true })


//schema static signup method
userSchema.statics.signup = async function(name, surname, email, password) {

    //validating fields
    if (!email || !password) {
        throw Error('Please, fill all the fields')
    }
    if (!validator.isEmail(email)) {
        throw Error('It seams like your email is not real')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Any hacker could discover this, change!')
    }

    //verifying if email already exists on db
    const exists = await this.findOne({email})

    if (exists) {
        throw Error('Ops! This email is already signed up.')
    }

    //hashing password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ name, surname , email , password: hash })

    return user
}

//schema static login method
userSchema.statics.login = async function(email, password) {

    //validating fields
    if (!email || !password) {
      throw Error('Please, fill all the fields')
    }
  
    //finding email on db
    const user = await this.findOne({ email })
    if (!user) {
      throw Error('Ops! This is not the right email')
    }
  
    //verifying if email and password match
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw Error('Ops! This is not the right password')
    }
  
    return user
}

//schema static add to favorites method
userSchema.statics.up = async function(id, product) {

    const update = await this.updateOne({_id: id}, { $addToSet: { favorite: product }})
   
    return update
}

module.exports = mongoose.model('User', userSchema)