const express = require('express')
const {errorHandler} = require('./middleware/errorMiddleware')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port =  process.env.PORT || 5000
const connectDB = require('./config/db')


connectDB()

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => console.log(`server started on port ${port}`))




app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/Users', require('./routes/userRoutes'))

app.use(errorHandler)