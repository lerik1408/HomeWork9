const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  img: String,
  rating: String,
  country: String,
  skills: String,
  price: String,
});

module.exports = mongoose.model('User', userSchema);
