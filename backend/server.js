const express = require('express')
const {errorHandler} = require('./middleware/errorMiddleware')
const colors = require('colors')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const port =  process.env.PORT || 5000





const app = express()
mongoose.connect("mongodb+srv://moffat123:moffat123@moffatcluster.0s4guzy.mongodb.net/goals-app?retryWrites=true&w=majority&appName=MoffatCluster")
    .then(() => {
        console.log('connected to database!')
        app.listen(port, () => console.log(`server started on port ${port}`))
    })
    .catch(() => {
        console.log('connection failed')
    })


app.use(express.json())
app.use(express.urlencoded({ extended: false }))




app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)