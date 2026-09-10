const express = require('express');
const db = require('mysql2')
const studentRoutes = require("./routes/studentRoute");
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("Srudent Managment API");
});

app.use(express.json());
app.use('/students', studentRoutes);


app.listen(port, ()=>{
    console.log(`Server is running @${port}`);
})

