const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const { connection } = require("./db/connection");
const Korisnik = require("./db/models/korisnik");
const UserRoute = require('./routes/UserRoute');
const mysql = require('mysql');
const { response } = require("express");

app.use(cors());
app.use(express.json())
app.use(UserRoute);

app.listen('9000',() => {
  console.log("Server started on port 9000! ");
});

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'fpis'
});
 
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.post('/dodajkorisnika',(req,res) => {
  let korisnik = {email:req.body.email,password:req.body.password};
  let sql = 'INSERT INTO korisnik SET ?';
  let query = db.query(sql,korisnik,(err,result) => {
    if (err) throw err;
    console.log(result);
    res.send('Korisnik je kreiran');
  });
});

app.post('/dodajkorisnika',(req,res) => {
  let korisnik = {email:req.body.email,password:req.body.password};
  let sql = 'INSERT INTO korisnik SET ?';
  let query = db.query(sql,korisnik,(err,result) => {
    if (err) throw err;
    console.log(result);
    res.send('Korisnik je kreiran');
  });
});

app.get('/korisnici',(req,res) => {
  let sql = 'SELECT * FROM korisnik';
  let query = db.query(sql, (err,results) => {
    if (err) throw err;
    console.log(results);
    res.send('Prikazani su korisnici');
  });
});

app.get('/korisnici/:id',(req,res) => {
  let sql = `SELECT * FROM korisnik WHERE korisnikid= ${req.params.id}`;
  let query = db.query(sql, (err,result) => {
    if (err) throw err;
    console.log(result);
    res.send('Prikazan je korisnik!');
  });
});

app.get('/kartoni',(req,res) => {
  let sql = 'SELECT * FROM karton';
  let query = db.query(sql, (err,results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

app.get('/kartoni/:id',(req,res) => {
  let sql = `SELECT * FROM karton WHERE kartonid=${req.params.id}`;
  let query = db.query(sql, (err,results) => {
    if (err) throw err;
    console.log(results);
    res.send('Prikazan je karton');
  });
});

app.get('/doktori',(req,res) => {
  let sql = 'SELECT * FROM doktor';
  let query = db.query(sql, (err,results) => {
    if (err) throw err;
    console.log(results);
    res.send('Prikazani su doktori');
  });
});

app.get('/doktori/:id',(req,res) => {
  let sql = `SELECT * FROM doktor WHERE doktorid=${req.params.id}`;
  let query = db.query(sql, (err,results) => {
    if (err) throw err;
    console.log(results);
    res.send('Prikazan je doktor');
  });
});

app.get('/rezultati',(req,res) => {
  let sql = 'SELECT * FROM rezultat';
  let query = db.query(sql, (err,results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

app.get('/rezultati/:id',(req,res) => {
  let sql = `SELECT * FROM rezultat WHERE rezultatid=${req.params.id}`;
  let query = db.query(sql, (err,results) => {
    if (err) throw err;
    console.log(results);
    res.send('Prikazan je rezultat');
  });
});

app.get('/parametri',(req,res) => {
  let sql = 'SELECT * FROM parametar';
  let query = db.query(sql, (err,results) => {
    if (err) throw err;
    console.log(results);
    res.send('Prikazani su parametri');
  });
});

app.get('/parametri/:id',(req,res) => {
  let sql = `SELECT * FROM parametar WHERE parametarid=${req.params.id}`;
  let query = db.query(sql, (err,results) => {
    if (err) throw err;
    console.log(results);
    res.send('Prikazan je parametar');
  });
});
//PAZI STA SALJES KAO RESPONSE!!!!!
app.get('/uzorci',(req,res) => {
  let sql = 'SELECT u.kartonid, k.ime, k.prezime, u.uzorakid FROM uzorak u JOIN karton k ON (u.kartonid=k.kartonid)';
  let query = db.query(sql, (err,results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

app.get('/uzorci/:id',(req,res) => {
  let sql = `SELECT * FROM uzorak WHERE uzorakid=${req.params.id}`;
  let query = db.query(sql, (err,results) => {
    if (err) throw err;
    console.log(results);
    res.send('Prikazan je uzorak');
  });
});

app.post('/addrezultat',(req,res) => {
  let rezultat = {posiljalac:req.body.posiljalac,datumupisa:req.body.datumupisa,uzorakid:req.body.uzorakid};
  let sql = 'INSERT INTO rezultat SET ?';
  let query = db.query(sql,rezultat,(err,result) => {
    if (err) throw err;
    console.log(result);
    res.send('Rezultat je kreiran');
  });
});

app.get('/tipovi',(req,res) => {
  let sql = 'SELECT * FROM tipuzorka';
  let query = db.query(sql, (err,results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

//connection();

// app.get("/korisnici", (req, res, next) => {
//   Korisnik.find({},(err,result) => {
//     res.send(result);
//   });
// });



// app.listen(port, () =>
//   console.log(`Example app listening at http://localhost:${port}`)
// );
