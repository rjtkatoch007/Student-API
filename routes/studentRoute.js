const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get('/all', studentController.allStudents);
router.post('/add', studentController.addStudent);
router.put('/update/:id', studentController.updateStudent);
router.delete('/delete/:id', studentController.deleteStudent);

module.exports = router