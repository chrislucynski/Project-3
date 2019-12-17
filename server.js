require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const path = require('path')

// Database
const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI

mongoose
mongoose
  // .connect('mongodb://localhost:27017/test')
  // .connect('mongodb+srv://chrislucynski:dRRgvEEcE6FVhpx@baek-d-bw5gw.mongodb.net/Baekd')
  .connect(process.env.MONGODB_URI || db, {useNewUrlParser: true, useUnifiedTopology: true, dbName: 'Baekd' })
  .then(console.log('connected to db'))
  .catch(err => console.log(err))

// Routes
const routes = require('./routes')


app.use(bodyParser.json())
// app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "client/cbuild")))
  app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}



const PORT = process.env.PORT || 3030;

// Start the server
app.listen(PORT, function() {
  console.log(`Come watch at http://localhost:${PORT}`);
});