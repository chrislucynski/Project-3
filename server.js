require('dotenv').config()
const express = require("express");
const app = express();
const PORT = 3030;
// body parser

// Middleware

// controllers
const routes = require('./routes/index')

// ORM
// import 
// Sever

// Database
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://chrislucynski:dRRgvEEcE6FVhpx@baek-d-bw5gw.mongodb.net/test", 
{useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('connected to db'))


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes, function(err){
    if(err) throw err
})

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
  console.log("Come watch at http://localhost:" + PORT);
});