const express = require('express')
const router = express.Router()
const user = require('../models/user')

router.get('/', async(req,res) => {
    try{
        const userDetails = await user.aggregate([
            {
                $group: {
                    _id: "$city",
                    count: { $sum: 1 },
                    totalIncome: {
                        $sum: {
                            $convert: {
                                input: { $substr: ["$income", 1, -1] },
                                to: "double"
                            }
                        }
                    }
                }
            },
            { $sort: { count: -1 } },
            { $limit: 10 },
            {
                $project: {
                    _id: 1,
                    avgIncome: { $divide: ["$totalIncome", "$count"] }
                }
            }
        ]);
        console.log(Object.keys(userDetails).length)
        console.log(userDetails)
        res.status(200).json(userDetails)
    }catch(err){
        res.status(400).json('Error'+err) 
    }
})

module.exports = router