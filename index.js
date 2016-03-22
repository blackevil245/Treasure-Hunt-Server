var app  = require('express')();
var PORT = process.env.PORT || 8080;

/**
 * Server module
 */
var mongoose     = require('mongoose');
var passport     = require('passport');
var bodyParser   = require('body-parser');
var morgan       = require('morgan');
var flash        = require('connect-flash');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

/**
 * Database connection
 */
var configDb = require('./src/config/database');
mongoose.connect(configDb.url);

/**
 * Express app
 */
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

/**
 * Routes
 */



/**
 * Server listening
 */

var server = app.listen(PORT, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server running at http://%s:%s', host, port);
})
