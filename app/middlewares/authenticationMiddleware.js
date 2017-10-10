var Client = require('../models/Client');

module.exports = function (req, res, next) {
  var userName = req.header('name');

  Client.findOne({name: userName}).then((client) => {
    req.user = client;
    next();
  });
}