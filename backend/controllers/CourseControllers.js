const Course = require('../models/CourseModel')
const User = require('../routes/UserRoutes')

export const createCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json(course);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const getCourseByUser = async (req, res) => {
    try {
        const courses = await User.findById({user: req.userId}).populate('courses');
        if (!courses) {
            return res.status(400).json({err: 'No courses found'});
        }
        res.status(200).json({courses});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}