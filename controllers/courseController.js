const db = require("../utils/db");
const Course = require('../models/courses');
const Student = require('../models/students');

const addCourse = async (req, res)=>{
    try {
        const {name}=req.body;
        const course = await Course.create({'name':name});

        res.status(201).send(course);
        
    } catch (error) {
        res.status(500).send({'error':error.message});
    }

}

const addStudentsToCourses = async (req, res)=>{
    try {
        const {studentId, courseIds} = req.body;

        const student = await Student.findByPk(studentId);
        const course = await Course.findAll({
            where:{
                id:courseIds
            }
        })

        await student.addCourse(course);

        const updateStudent = await Student.findByPk(studentId,{include:Course});

        res.status(200).json(updateStudent);
        
    } catch (error) {
        
    }
}

module.exports={
    addCourse,
    addStudentsToCourses
}