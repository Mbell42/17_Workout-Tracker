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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});


// ROUTES
app.use(require("./routes/routes_api"));
app.use(require("./routes/routes_html"));


// START SERVER
applicationCache.addEventListener(PORT, () => {
    console.log(`App is running on port ${PORT}!`);
});