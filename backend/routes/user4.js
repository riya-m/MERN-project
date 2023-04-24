const express = require('express')
const router = express.Router()
const user = require('../models/user')

router.get('/', async(req,res) => {
    try{
        const userDetails = await user.find({
            car: { $in: ["BMW", "Mercedes", "Audi"] },
            email: { $not: /\d/ }
        })
        res.status(200).json(userDetails)
    }catch(err){
        res.status(400).json('Error'+err) 
    }
})

module.exports = router