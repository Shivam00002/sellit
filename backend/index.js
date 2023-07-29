if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}
const express = require("express");

const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const mysql = require("mysql");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sellit",
});


db.connect(function (error) {

    if (error) {
        throw error;
    } else {
        console.log("MySQL Database is connected Successfully");
    }
});


app.get('/', (req, res) => {
    res.send("Welcome to our Website")
})

app.post('/signup', (req, res) => {
    let sqlData = [req.body.email, req.body.password]
    let sql = "INSERT INTO `signup`( `email`, `password`) VALUES (?,?)"
    db.query(sql, sqlData, (error, result) => {
        if (error) {
            return res.status("error is comeing")
        } else {
            return res.json(result)
        }
    })
})


app.get("/signup", (req, res) => {
    let sql = "SELECT * FROM signup"
    db.query(sql, (error, result) => {
        if (error) {
            return res.status("error is comeing")
        } else {
            return res.json(result)
        }
    })
})



app.get("/signup/:id", (req, res) => {
    let userID = req.params.id
    let sql = "SELECT * FROM signup WHERE email =?"
    db.query(sql, userID, (error, result) => {
        if (error) {
            return res.status("error is comeing")
        } else {
            return res.json(result)
        }
    })
})



















app.listen(8000);
