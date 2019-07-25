const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const userSchema = new mongoose.Schema({
  name: String,
  img: String,
  rating: String,
  country: String,
  skills: String,
  price: Number,
  phone: {
    type: Number,
    unique: false,
  },
  gender: {
    type: String,
    enum: ['Mr', 'Ms'],
  },
  company: String,
});
userSchema.plugin(beautifyUnique);

module.exports = mongoose.model('User', userSchema);
