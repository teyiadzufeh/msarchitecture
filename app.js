require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 3000;

//CONNECTING TO MONGODB DATABASE
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const serviceRouter = require('./server/routes/serviceRoutes')
app.use('/api/v1', serviceRouter)

app.listen(port, () => console.log('Server Started'))

console.log("Hello Docker");