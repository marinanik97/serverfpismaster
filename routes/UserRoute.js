const express = require('express');
const bycript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connection = require("../db/connection");



const User = require('../db/models/user');
const UserRoute = new express.Router();



UserRoute.post('/signup', async (req,res,next) =>{
    try{
      const hashedPassword = await bycript.hash(req.body.password, 8);
      //ovde je bilo 'marina' umesto req.body.password
      const user = new User({...req.body, password: hashedPassword });
      await user.save();
      res.send(user);
    }catch(e){
      res.status(400).send(e)
    }
  });

  // UserRoute.post("/login", async (req, res, next) => {
  //           console.log(connection)
  //         const user = await User.findOne({email: req.body.email});
  //         const password = await bycript.compare(req.body.password, user.password);
  //         console.log(password);
  //         if(password){
  //           var token = await jwt.sign({
  //               exp: 7,
  //               data: user.email
  //             }, 'marina');
  //
  //           res.send(token);
  //         }
  //
  //         });


  UserRoute.get("/users", (req, res, next) => {
    User.find({}, (err, result) => {
      res.send(result);
    });
  });



  module.exports = UserRoute;
