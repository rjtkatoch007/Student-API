const db = require("../utils/db");

const allStudents = (req,res)=>{
    const selectQ = `SELECT * FROM students`;
    db.execute(selectQ, [], (err, result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log("Students retrieved successfully");
        res.status(200).send(result);
    })
}

const addStudent = (req, res)=>{
    const {name, email, age} = req.body;
    const addQ = `INSERT INTO students (name, email, age) VALUES (?,?,?)`;

    db.execute(addQ, [name, email, age], (err)=>{
        if(err){
            console.log(err.message);
           res.status(500).send(err.message);
           db.end();
           return;
        }
        console.log("Student has been inserted");
        res.status(200).send(`Student with name ${name} successfully added`);

    })
}

const updateStudent = (req, res)=>{
    const {id} = req.params;
    const {name, email, age} = req.body;
    const updateQuery = `UPDATE students SET name=?, email=?, age=? WHERE id=?`;

    db.execute(updateQuery, [name,email, age, id], (err, result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        if(result.affectedRows===0){
            res.status(404).send("Student not found");
            return;
        }

        console.log("Student has been updated");
        res.status(200).send(`Student successfully updated`);

    })
}

const deleteStudent = (req, res) => {
    const {id} = req.params;
    const deleteQuery = `DELETE FROM students WHERE id= ?`;

    db.execute(deleteQuery, [id], (err)=>{
        if(err){
            console.log(err.message);
            res.status(404).send(err.message);
            db.end();
            return;
        }

        if(db.affectedRows===0){
            res.status(404).send("Student not found");
            return;
        }

        console.log("Student has been deleted");
        res.status(200).send(`Student with id ${id} successfully deleted`);
    })
}

module.exports = {
    allStudents,
    addStudent,
    updateStudent,
    deleteStudent
}