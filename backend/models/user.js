const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    income: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    car: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    },
    phonePrice: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('person', userSchema)