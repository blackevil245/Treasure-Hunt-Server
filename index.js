'use strict';

const app  = require('express')();
const PORT = process.env.PORT || 8080;

/**
 * Server module
 */
const mongoose     = require('mongoose');
const bodyParser   = require('body-parser');
const morgan       = require('morgan');
const cookieParser = require('cookie-parser');

/**
 * Database connection
 */
const configDb = require('./src/config/database');
mongoose.connect(configDb.url);

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
require('./src/api/item/item.route')(app);

/**
 * Server listening
 */

const server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Server running at http://%s:%s', host, port);
});
