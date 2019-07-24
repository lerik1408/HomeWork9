const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const userSchema = new mongoose.Schema({
  name: String,
  img: String,
  rating: String,
  country: String,
  skills: String,
  price: String,
  phone: {
    type: Number,
    unique: true,
  },
  gender: {
    type: String,
    enum: ['Mr', 'Ms'],
  },
  company: String,
});
userSchema.plugin(beautifyUnique);

module.exports = mongoose.model('User', userSchema);
