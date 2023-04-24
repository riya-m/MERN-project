const express = require('express')
const router = express.Router()
const user = require('../models/user')

router.get('/', async(req,res) => {
    try{
        const userDetails = await user.find({
            income: { $regex: /^([0-4](\.\d+)?|\d+(\.\d+)?|\.\d+|\$0*[0-4])/ },
            car: { $in: ["BMW", "Mercedes"] }
        });
        console.log(Object.keys(userDetails).length)
        res.status(200).json(userDetails)
    }catch(err){
        res.status(400).json('Error'+err) 
    }
})

module.exports = router