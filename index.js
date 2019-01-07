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

// CONNECT TO THE DATABASE
// =================================================================

// use mongoose to connect to mongodb
mongoose.connect(
  'mongodb://<dbuser>:<dbpassword>@#####.mlab.com:#####/dinosaurs',
  { useNewUrlParser: true }
);

// DEFINE ROUTERS
// =================================================================

// get an instance of the express router
var router = express.Router();

// configure middleware to use for all requests
router.use(function(req, res, next) {
  // log a message to the console
  console.log('Something is happening!');
  // ensure we go to the next route and don't stop here
  next();
});

// define a test route (accessed via GET http://localhost:8000/api)
router.get('/', function(req, res) {
  // return a message in the response
  res.json({ message: 'Hooray! Welcome to the API!' });
});

// REGISTER ROUTERS
// =================================================================

// register main router with app using the api namespace
app.use('/api', router);

// START THE SERVER
// =================================================================

// set the app to listen for requests on the port defined earlier
app.listen(port);

// log a message to the console if running successfully
console.log('Play with dinosaurs on port ' + port);
