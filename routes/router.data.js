const {createCourse,deletedCourse,getSingleCourse,getAllCourses,updatedCourse} = 
require('../controllers/data.controller');
const validationSchema = require('../middleWare/validationSchema')

const express = require('express');
const router = express.Router();
// CRUD Operation ==> create / Read / Update / Delete
// Get All Data is Route
router.route('/')
.get(getAllCourses)
.post(validationSchema(),createCourse);



// search single course
router.route('/:id')
.get(getSingleCourse)
.patch(updatedCourse)
.delete(deletedCourse);
// Create Data



module.exports = router;