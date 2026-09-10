const express = require('express');
const mysql = require('mysql2')
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("Srudent Managment API");
});

app.use(express.json());



app.listen(port, ()=>{
    console.log(`Server is running @${port}`);
})

