'use strict';

const baseUrl = '/api/beacons';
const beacons = require('./beacon.json');

module.exports = function (app) {
  /**
   * GET
   * Retrieve beacons
   */
  app.get(baseUrl, (req, res) => {
    res.json(beacons);
  });
};
