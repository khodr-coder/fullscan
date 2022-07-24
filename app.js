//jshint esversion:6


//require everything

const express = require("express");

const bodyParser = require("body-parser");

const ejs = require("ejs");

//const mongoose = require('mongoose');


//fire up express

const app = express();

//set up the view engine for ejs

app.set('view engine', 'ejs');

//set up body parser

app.use(bodyParser.urlencoded({

  extended: true

}));

// use public just in case we want to incorportate a front end

app.use(express.static("public"));





//TODO - code goes here

app.get("/", function(req, res){



    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  //
  // var fname = req.body.firstName;
  // var lname = req.body.lastName;
  // var emaila = req.body.emailadd;

  res.sendFile(__dirname + "/index.html");

});

// set up app to listen

app.listen(process.env.PORT || 3000, function() {

  console.log("Server started on port 3000");

});
