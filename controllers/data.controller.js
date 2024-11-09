const {validationResult} = require('express-validator'); // express-validator
let courses = require('../data/data');

const getAllCourses = (req, res)=>{
    res.json(courses)
}
const getSingleCourse = (req,res)=>{
    console.log(req.params.id);
    const courseId = +req.params.id;
    const serachCourse = courses.find((course)=> course.id === courseId);
    if (!serachCourse) {
        return res.status(404).json({mesg : "Course not found"})
    }
    res.json(serachCourse);
}


const createCourse = (req,res)=>{
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json(errors.array())
    }
    // console.log(errors);  
    let course = {id : courses.length+1 , ...req.body};
    courses.push(course);
res.status(201).json(course)
}
const updatedCourse = (req,res)=>{
    // Request paramter || Request Body
    const courseId = +req.params.id;
    console.log(courseId);
    
    let findCourse = courses.find((course)=> course.id === courseId);
    if (!findCourse) {
        return res.status(404).json({mesg : "Course not found"});
    }
    findCourse = {...findCourse , ...req.body};
    res.status(200).json({data : findCourse , mesg : "updated data"})
}
const deletedCourse = (req,res)=>{
    const courseId = +req.params.id;
    courses = courses.filter((course)=> course.id !== courseId);
   res.status(200).json({data : courses , mesg : `course by id : ${req.params.id} is deleted`})
}
module.exports = {
    getAllCourses,
    getSingleCourse,
    createCourse,
    updatedCourse,
    deletedCourse
}