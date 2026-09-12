const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.post('/addcourses', courseController.addCourse);
router.get('/addStudentsCourses', courseController.addStudentsToCourses);

module.exports = router