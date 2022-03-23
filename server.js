require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require('./config/db');
const PORT = process.env.PORT || 4000;



// connect to MongoDB
connectDB();

app.use(express.json());

app.use("/api", require("./routes/api"));

app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});


//If connection to db is succesful then connect to server
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(
    PORT,
    console.log(
      `Server running....... Now listening for request on port ${PORT}`
    )
  );

});


