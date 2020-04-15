const mongoose = require('mongoose');

const CacheSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  location: {
    type: String,
    required: true,
  },
  weapons: {
    type: String,
  },
  food: {
    type: String,
  },
  toiletpaper: {
    type: Number,
  },
  trapped: {
    type: String,
    default: 'no',
  },
  notes: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('cache', CacheSchema);
