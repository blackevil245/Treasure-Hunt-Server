'use strict';

const baseUrl = '/api/adventures';
const adventures = require('./adventure.json');

module.exports = function (app) {
  /**
   * GET
   * Retrieve adventures
   */
  app.get(baseUrl, (req, res) => {
    res.json(adventures);
  });
};
