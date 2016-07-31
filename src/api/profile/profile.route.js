'use strict';

const baseUrl = '/api/profiles';
const profiles = require('./profile.json').profile;

module.exports = function (app) {

  /**
   * GET profiles, used for login
   */
  app.get(baseUrl, (req, res) => {
    let exist = false;

    profiles.forEach(profile => {
      if (profile.username === req.query.username && profile.password === req.query.password) {
        exist = true;
      }
    });

    if (exist) {
      res.json({
        response: 'succeed',
      });
    } else {
      res.json({
        response: 'failed',
      });
    }
  });
};
