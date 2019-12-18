require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const path = require('path')

// Database
const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI

mongoose
  .connect(process.env.MONGODB_URI || db, {useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log('connected to db'))
  .catch(err => console.log(err))

// Routes
const routes = require('./routes')


app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  console.log('hit server file prod');
  app.use(express.static(path.join(__dirname, "client/build")))
  app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}



const PORT = process.env.PORT || 3030;

// Start the server
app.listen(PORT, function() {
  console.log(`Come watch at http://localhost:${PORT}`);
});