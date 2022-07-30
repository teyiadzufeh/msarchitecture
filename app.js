require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 3000;


app.use(express.json())

const serviceRouter = require('./server/routes/serviceRoutes')
app.use('/api/v1', serviceRouter) //contains all the routes in the app

app.listen(port, () => console.log(`Server Started on port ${port}`))