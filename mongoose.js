var config = require('./config/config');

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// Build the connection string
var uriDB = "mongodb://" + config.db.user + ":" + config.db.password + "@";
for (var i = 0; i < config.db.hosts.length; i++) {
  if(i > 0){
    uriDB += ","
  }
  uriDB += config.db.hosts[i].host + ":" + config.db.hosts[i].port
}
uriDB += "/"+ config.db.name +"?ssl=true&replicaSet=" + config.db.replicaSet + "&authSource=" + config.db.auth;

// Create the database connection
mongoose.connect(uriDB, {
  useMongoClient  : true,
  socketTimeoutMS : 0,
  keepAlive       : true,
  reconnectTries  : 30
});

// EVENTS
// Successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open');
});

// Throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

// Disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = mongoose;