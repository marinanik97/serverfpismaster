const mongoose = require('mongoose');

const express = require("express");
const cors = require("cors");
const app = express();
// const { connection } = require("../");
const UserRoute = require("../routes/UserRoute");
const mysql = require("mysql");
const { response } = require("express");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen("9000", () => {
  console.log("Server started on port 9000! ");
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fpis",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post("/login", (req, res) => {
  let korisnik = { email: req.body.email, password: req.body.password };
  let sqlQuery = "SELECT email,password FROM korisnik WHERE email = ?";
  let execute = db.query(sqlQuery, korisnik.email, async (err, result) => {
    console.log(result);
    if (err) throw err;
    if (result && result.length) {
      jwt.sign({ exp: 7, data: result[0].email }, "marina", function (
        err,
        token
      ) {
        if (err) res.send(err);
        res.send({ token: token });
      });
    } else {
      res.send({ err: "Please sign up." });
    }
  });
});

module.exports.connection = async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/fpis', {useNewUrlParser: true, useUnifiedTopology: true})
        mongoose.set('debug', true);
        console.log('connected')
    }catch (e) {
        throw e;
    }
};