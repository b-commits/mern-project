const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  login: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  loggedin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('User', UserSchema);
