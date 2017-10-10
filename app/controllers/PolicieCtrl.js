var Client  = require('../models/Client');
var Policie = require('../models/Policie');

var ctrl = {}

ctrl.getPoliciesByClientName = function (req, res) {

  var name = req.params.client_name;

  Client.findOne({name: name}).then((client) => {

    if(!client){ return res.status(412).send({ error: 'User not found' }); }

    Policie.find({clientId: client._id}).then((policies) => {
      res.send(policies);
    });

  });

}

module.exports = ctrl;