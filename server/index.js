const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mycon = require('mysql');
const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static('public'));

const c = mycon.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Gowtham@12345",
    database: "skillpoint"
});

c.connect(function (error) {
    if (error) { console.log(error); }
    else { console.log('Database Connected'); }
})
app.get('/getdetails/:id', (req, res) => {
    let { id } = req.params;
    let sql = 'select * from empdetails where id=?';
    c.query(sql, [id], (error, result) => {
        if (error) {
            res.send(error);
        }
        else {
            res.send(result);
        }
    })
})

app.post('/empinsert', (req, res) => {
    let { name, role, age, level, skills, projects, work, status, location, profilesum, workexp, music, fuelspot, tourist,firstcol,secondcol,thirdcol,fourthcol } = req.body;
  
    let sql = "insert into  empdetails(name,role,age,level,skills,projects,work,status,location,profilesum,workexp,music,fuelspot,tourist,firstcol,secondcol,thirdcol,fourthcol) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    c.query(sql, [name, role, age, level, skills, projects, work, status, location, profilesum, workexp, music, fuelspot, tourist,firstcol,secondcol,thirdcol,fourthcol], (error, result) => {
        if (error) {
            res.send(error);
        }
        else {
            res.send(result);
        }
    })
})

app.listen(3002)