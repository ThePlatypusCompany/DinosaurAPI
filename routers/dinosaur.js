// CONFIGURE DINOSAUR ROUTER
// =================================================================

// import the packages we need
var express = require('express');

// import the models we need
var Dinosaur = require('../models/dinosaur.js');

// get an instance of the express router
var router = express.Router();

// set the base route
router.route('/')

  // define route to retrieve all dinosaurs (accessed via GET http://localhost:8000/api/dinosaurs)
  .get(function(req, res) {
    // find all dinosaur records and execute callback function
    Dinosaur.find(function(err, dinosaurs) {
      if (err) {
        // return an error in the response
        res.send(err);
      } else {
        // return a message and all dinosaur records in the response
        res.json({
          message: 'Dinosaurs found!',
          dinosaurs
        });
      };
    });
  });

// export router for use in the application
module.exports = router;
