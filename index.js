// SETUP THE APPLICATION
// =================================================================

// import the packages we need
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// initialize the app as an instance of express
var app = express();

// configure app to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// define port to be used
var port = 8000;

// START THE SERVER
// =================================================================

// set the app to listen for requests on the port defined earlier
app.listen(port);

// log a message to the console if running successfully
console.log('Play with dinosaurs on port ' + port);
