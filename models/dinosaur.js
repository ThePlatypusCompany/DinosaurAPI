// CONFIGURE DINOSAUR MODEL
// =================================================================

// import the packages we need
var mongoose = require('mongoose');

// initialize an instance of mongoose schema
var schema = mongoose.Schema;

// define the schema
var DinosaurSchema = new schema({
  name: String
});

// export the schema for use in the application
module.exports = mongoose.model('Dinosaur', DinosaurSchema);
