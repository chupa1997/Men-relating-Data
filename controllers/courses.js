const express = require('express')
const router = express.Router()
const Course = require('../models/Course')
const Instructor = require('../models/Instructor')

// create route 
router.post('/', async (req, res) => {
    await Course.create(req.body)
    res.redirect('/courses')
})

// index page (populate instructor)
router.get('/', async (req, res) => {
    const courses = await Course.find().populate('instructor')
    res.render('courses/index', { courses })
})

// show 1 course 
router.get('/:id', async (req, res) => {
    const course = await Course.findById(req.params.id).populate('instructor')
    res.render('courses/show', { course })
})

// update the course
router.post('/update/:id', async (req, res) => {
    await Course.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/courses/${req.params.id}`)
})

// delete course
router.post('/delete/:id', async (req, res) => {
    await Course.findByIdAndDelete(req.params.id)
    res.redirect('/courses')
})

// review (embedded)
router.post('/:id/reviews', async (req, res) => {
    const course = await Course.findById(req.params.id)
    course.reviews.push(req.body)
    await course.save()
    res.redirect(`/courses/${req.params.id}`)
})

// show 1 review
router.get('/:id/reviews', async (req, res) => {
    const course = await Course.findById(req.params.id)
    res.render('reviews/index', { course })
})

module.exports = router
