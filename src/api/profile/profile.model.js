const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  activeAdventure: {
    type: Schema.ObjectId,
    ref: 'adventure',
  },
  finishedAdventure: [{
    type: Schema.ObjectId,
    ref: 'adventure',
  }],
});

module.exports = mongoose.model('profile', ProfileSchema);
