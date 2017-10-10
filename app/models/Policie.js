var mongoose = require('mongoose');

var schema = new mongoose.Schema(
  {
    _id                : String,
    amountInsured      : String,
    email              : String,
    inceptionDate      : String,
    installmentPayment : String,
    clientId           : { type: mongoose.Schema.Types.String, ref: 'clients' }
  }
);

var policies = module.exports = mongoose.model('policies', schema);