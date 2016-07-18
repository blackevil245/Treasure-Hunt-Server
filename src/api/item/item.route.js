'use strict';

const baseUrl = '/api/items';
const items = require('./item.json');

module.exports = function (app) {
  /**
   * GET
   * Retrieve items
   */
  app.get(baseUrl, (req, res) => {
    if (!items) {
      res.send('error');
    }

    res.json(items);
  });
};
