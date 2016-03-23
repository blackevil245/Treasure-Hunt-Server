var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
  name       : String,
  joinDate   : {
    type     : Date,
    default  : Date.now
  },
  local      : {
    email    : String,
    password : String
  },
  facebook   : {
    id       : String,
    token    : String,
    email    : String,
    name     : String
  },
  google     : {
    id       : String,
    token    : String,
    email    : String,
    name     : String
  },
  currentAdventureId : []
});

/**
 * Hash password
 */
 UserSchema.methods.hashPassword = function(password) {
   return bcrypt.hashSync(password, bcrypt.generateSalt(8), null);
 }

 /**
  * Validate password
  */
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
}

/**
 * Expose model to app
 */
module.exports = mongoose.model('user', UserSchema);
