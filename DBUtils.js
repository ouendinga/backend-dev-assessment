var mongoskin = require('./mongoskin');

mongoskin.bind('clients');
mongoskin.bind('policies');

var clients = require('./seeds/clients');
var policies = require('./seeds/policies');

var DBUtils = {}

DBUtils.removeAll = function(done) {
  mongoskin.clients.remove(done);
  mongoskin.policies.remove(done);
}

DBUtils.seed = function(done) {
  mongoskin.clients.insert(clients, done);
  mongoskin.policies.insert(policies, done);
}

module.exports = DBUtils;