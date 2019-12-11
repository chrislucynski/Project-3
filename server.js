require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require('body-parser')

// Database
const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI

mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(console.log('connected to db'))
  .catch(err => console.log(err))

// Routes
const routes = require('./routes')

// ORM
// import 

// Sever
// app.get('view engine',)



// app.use('/api/products', products)
app.use(bodyParser.json())
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes, function(err){
  if(err) throw err
})


const PORT = process.env.PORT || 3030;

// Start the server
app.listen(PORT, function() {
  console.log(`Come watch at http://localhost:${PORT}`);
});