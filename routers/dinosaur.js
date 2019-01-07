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
  })

  // define route to create a dinosaur (accessed via POST http://localhost:8000/api/dinosaurs)
  .post(function(req, res) {
    // build a new instance of the dinosaur model
    var dinosaur = new Dinosaur();
    // set the dinosaur name based on the request body
    dinosaur.name = req.body.name;
    // check for errors and save the dinosaur
    dinosaur.save(function(err) {
      if (err) {
        // return an error in the response
        res.send(err);
      } else {
        // return a message and the dinosaur record in the response
        res.json({
          message: 'Dinosaur created!',
          dinosaur
        });
      };
    });
  });

// export router for use in the application
module.exports = router;
