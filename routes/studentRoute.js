const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get('/all', studentController.allStudents);
/* router.post('/add', studentController);
router.put('/update/:id', studentController);
router.delete('/delete/:id', studentController); */

module.exports = router