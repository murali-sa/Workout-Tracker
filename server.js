//install packages
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
//set port
const PORT = process.env.PORT || 3000;

const app = express();

//use logger
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParser: true});

//require('./seeders/seed')
const db = require("./models");
//use routes
require('./routes/api-routes')(app)
require('./routes/html-routes')(app)


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
})