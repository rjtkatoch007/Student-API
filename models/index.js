const Student = require('./students');
const courses = require('./courses');
const studentCourses = require('./studentCourses');


//many to many associations
Student.belongsToMany(courses, {through:studentCourses});
courses.belongsToMany(Student, {through:studentCourses});

module.export ={
    Student,
    courses,
    studentCourses
}