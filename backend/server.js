const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1/express_project'

const app = express()

const cors = require('cors');
app.use(cors());

mongoose.connect(url, {useNewUrlParser: true})

const userRouter1 = require('./routes/user1')
const userRouter2 = require('./routes/user2')
const userRouter3 = require('./routes/user3')
const userRouter4 = require('./routes/user4')
const userRouter5 = require('./routes/user5')

app.use('/',userRouter1)
app.use('/user1',userRouter1)
app.use('/user2',userRouter2)
app.use('/user3',userRouter3)
app.use('/user4',userRouter4)
app.use('/user5',userRouter5)

app.listen(3000)