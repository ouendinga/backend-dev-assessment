// Dependencies
var express      = require('express');
var logger       = require('morgan');
var ConnectRoles = require('connect-roles');

// DB
var mongoose = require('./mongoose');

// Middlewares
var errorMiddleware          = require('./app/middlewares/errorMiddleware');
var notFoundMiddleware       = require('./app/middlewares/notFoundMiddleware');
var authorisationMiddleware  = require('./app/middlewares/authorisationMiddleware');
var authenticationMiddleware = require('./app/middlewares/authenticationMiddleware');

// Routes
var routes = require('./app/routes');

// Configuration
var config = require('./config/config');

/* APP */

// Create app
var app = express();

// Add middlewares
app.use(errorMiddleware);
app.use(authorisationMiddleware.middleware());
app.use(authenticationMiddleware);
app.use(logger('dev'));

// Routes
app.use('/', routes);

// 404 Not Found middleware
app.use(notFoundMiddleware);

// Run app server
app.listen(config.port);
console.log('Express started on port ' + config.port);

module.exports = app;