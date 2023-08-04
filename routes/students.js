const express = require('express')
const router = express.Router()
const Student = require('../models/student_schema.js')

//API Endpoints
router.get('/get_students', async (req, res) => {
    try {
        const students = await Student.find()
        res.json(students)
    } catch (err) { 
        res.status(500).json({
            message: err.message
        })
    }
})

router.get('/gg_group', async (req, res) => {
    try {
        const students = await Student.find({ 
            attendance : { $lte: 30}
        })
        res.json(students)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

router.get('/student/:roll', async(req, res) => {
    try {
        const student = await Student.findOne({
            roll: req.params.roll
        })
        res.json(student)

    } catch (err) {
        res.status(404).json({
            message: 'Student not found'
        })
    }
})

router.post('/admission', async(req, res) => {
    const student = new Student(req.body)

    try{
        const newStudent = await student.save()
        res.status(201).json(newStudent)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

router.put('/change_branch/:roll', async(req, res) => {
    try {
        const updatedStudent = await Student.findOneAndUpdate(
            {roll: req.params.roll},
            {branch: req.body.branch},
            {new: true}
        )
        res.json(updatedStudent)
    } catch (err) {
        res.status(404).json({
            message: 'Student not found'
        })
    }
})

router.delete('/delete_student/:roll', async(req, res) => {
    try {
        await Student.deleteOne({
            roll: req.params.roll
        })
        res.json({
            message: 'Student Deleted'
        })
    } catch (err) {
        res.status(404).json({
            message: 'Student not found'
        })
    }
})

module.exports = router