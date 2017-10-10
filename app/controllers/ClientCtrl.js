var Client  = require('../models/Client');
var Policie = require('../models/Policie');

var ctrl = {}

ctrl.getClientById = function (req, res) {
  var id = req.params.client_id;

  Client.findOne({_id: id}).then((client) => {
    res.send(client);
  });
}

ctrl.getClientByName = function (req, res) {
  var name = req.params.client_name;

  Client.findOne({name: name}).then((client) => {
    res.send(client);
  });
}


ctrl.getClientByPolicyId = function(req, res) {
  var policie_id = req.params.policie_id;

  Policie.findOne({_id: policie_id})
  .populate('clientId')
  .then((policie) => {
    if(!policie){ return res.status(412).send({ error: 'Policie not found' }); }
    res.send(policie.clientId);
  });
}

module.exports = ctrl;