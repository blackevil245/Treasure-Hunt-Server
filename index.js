'use strict';

const app  = require('express')();
const PORT = process.env.PORT || 8080;

/**
 * Server module
 */
const bodyParser   = require('body-parser');
const morgan       = require('morgan');
const cookieParser = require('cookie-parser');


/**
 * Express app
 */
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Routes
 */

require('./src/api/profile/profile.route')(app);
require('./src/api/adventure/adventure.route')(app);
require('./src/api/beacon/beacon.route')(app);

/**
 * Server listening
 */

const server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Server running at http://%s:%s', host, port);
});
