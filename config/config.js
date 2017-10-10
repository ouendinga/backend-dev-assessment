var fs   = require('fs');
var path = require('path');

// Load configVariables
var configVariables;
if(fs.existsSync(path.join(__dirname, 'config-variables.js'), fs.F_OK)){
  configVariables = require('./config-variables');
}else{
  configVariables = require('./config-variables-demo');
}

module.exports = {

  port : process.env.PORT || configVariables.port || 3000,
  db   : configVariables.db

}