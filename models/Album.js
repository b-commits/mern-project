const mongoose = require('mongoose');

const AlbumSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  band: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Album', AlbumSchema);
