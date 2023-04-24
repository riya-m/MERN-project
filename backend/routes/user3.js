const express = require('express')
const router = express.Router()
const user = require('../models/user')

router.get('/', async (req, res) => {
    try {
        const userDetails = await user.find({
            $and: [
                { last_name: /^M/ },
                { $expr: { $gt: [{ $strLenCP: "$quote" }, 15] } },
                // { email: { $regex: new RegExp(`^.*$last_name.*$`, "i") } }
              ]
          })
        console.log(Object.keys(userDetails).length)
        res.status(200).json(userDetails)
    } catch (err) {
        res.status(400).json('Error' + err)
    }
})

module.exports = router