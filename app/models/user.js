const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  img: String,
  rating: String,
  country: String,
  skills: String,
  price: String,
  gender: {
    type: String,
    enum: ['Mr', 'Ms'],
  },
  phone: Number,
  company: String,
});

module.exports = mongoose.model('User', userSchema);
