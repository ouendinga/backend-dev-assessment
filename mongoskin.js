var mongo  = require('mongoskin');
var config = require('./config/config');

// Build the connection string
var uriDB = "mongodb://" + config.db.user + ":" + config.db.password + "@";
for (var i = 0; i < config.db.hosts.length; i++) {
  if(i > 0){
    uriDB += ","
  }
  uriDB += config.db.hosts[i].host + ":" + config.db.hosts[i].port
}
uriDB += "/"+ config.db.name +"?ssl=true&replicaSet=" + config.db.replicaSet + "&authSource=" + config.db.auth;

var mongoskin = mongo.db(uriDB);

module.exports = mongoskin;