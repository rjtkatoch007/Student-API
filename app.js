const express = require('express');
const db = require('./utils/db')
const studentRoutes = require("./routes/studentRoute");
const app = express();
const port = 3000;

//models
const studentModel = require('./models/students');

app.get('/', (req, res)=>{
    res.send("Srudent Managment API");
});

app.use(express.json());
app.use('/students', studentRoutes);

db.sync({force:false}).then(()=>{
    app.listen(port, (err)=>{
    console.log(`Server is running`);
    })
}).catch((err)=>{
    console.log(err);
})



