const mongoose = require('mongoose');

const RatingSchema = mongoose.Schema({
  value: {
    type: String,
    default: '1',
  },
  albumId: {
    type: String,
    required: true,
  },
  userLogin: {
    type: String,
    default: true,
  },
});

module.exports = mongoose.model('Rating', RatingSchema);
