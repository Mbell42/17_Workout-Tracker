// DEPENDENCIES
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


// PORT
const PORT = process.env.PORT || 3000;


// MIDDLEWARE
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// CONNECT TO MONGO DB W/MONGOOSE
const mongoose.connect();

// ROUTES


// START SERVER
applicationCache.addEventListener(PORT, () => {

});