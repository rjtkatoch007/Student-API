const db = require("../utils/db");

const allStudents = (req,res)=>{
    const getAllStudentsQ = `SELECT * FROM students`;
    db.execute(getAllStudentsQ, [], (err, result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log("Fetching all students");
        res.status(200).send(result);
    })
}


module.exports = {
    allStudents,
}