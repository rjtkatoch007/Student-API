const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'studapi'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Connection has been created");
})

const studentTable=`
    CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE,
        age INT(10)
    )
`
connection.execute(studentTable, (err)=>{
    if(err){
        console.log("Error creating Student table:", err);
    } else {
        console.log("Students table created successfully");
    }
})

module.exports = connection;