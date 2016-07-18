'use strict';

const baseUrl = '/api/profiles';
const profile = require('./profile.model');
// const adventure = require('../adventure/adventure.model');
// const item = require('../item/item.model');

module.exports = function (app) {

 /**
  * POST /api/profile
  * Create profile
  */
  app.post(baseUrl, (req, res) => {
    profile.findOne((err, _profile) => {

      if (profile) {
        res.send('existed');
      } else {
        const newUser = profile({
          username: req.querystring.username,
          password: req.querystring.password,
        });
        res.header('Access-Control-Allow-Origin', '*');

        newUser.save(err => {
          if (err) {
            return res.send(err);
          }
          return res.json({
            message: 'success',
          });
        });
      }
    });
  });

  /**
   * GET /api/profile/:id
   * Retrieve profile with id
   */
  app.get(baseUrl + '/:id', (req, res) => {
    profile.findOne({ _id: req.params.id }, (err, profile) => {
      if (err) {
        return res.send(err);
      }

      return res.json(profile);
    });
  });


  /**
   * PUT /api/profile/:id
   * Edit a field of the profile with :id
   * Editing field in body
   */
  app.put(baseUrl + '/:id', (req, res) => {
    profile.findOneAndUpdate({ _id: req.params.id }, (err, profile) => {
      if (err) {
        return res.send(err);
      }

      return res.json(profile);
    });
  });
};
