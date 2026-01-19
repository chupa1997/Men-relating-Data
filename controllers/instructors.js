const express = require('express')
const router = express.Router()
const Instructor = require('../models/Instructor')

// new instructor form only
router.get('/new', (req, res) => {
    res.render('instructors/new')
})

// create instructor
router.post('/', async (req, res) => {
    await Instructor.create(req.body)
    res.redirect('/instructors')
})

// index instructors
router.get('/', async (req, res) => {
    const instructors = await Instructor.find()
    res.render('instructors/index', { instructors })
})

// show instructor
router.get('/:id', async (req, res) => {
    const instructor = await Instructor.findById(req.params.id)
    res.render('instructors/show', { instructor })
})

module.exports = router
