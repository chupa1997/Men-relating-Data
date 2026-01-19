// imports
const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const morgan = require("morgan")

// middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

// controllers
const instructorRoutes = require('./controllers/instructors')
const courseRoutes = require('./controllers/courses')

// database connection
async function connectToDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured", error)
    }
}

connectToDB()

// routes
app.use('/instructors', instructorRoutes)
app.use('/courses', courseRoutes)

// server
app.listen(3000, () => {
    console.log('App is working')
})