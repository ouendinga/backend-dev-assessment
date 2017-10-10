var mongoose = require('mongoose');

var schema = new mongoose.Schema(
  {
    _id   : String,
    name  : String,
    email : String,
    role  : String
  }
);

var clients = module.exports = mongoose.model('clients', schema);