const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  movie: { type: String, required: true },
  type: { type: String, required: true },
  production: { type: String, required: true },
  actor: { type: String, required: true },
  cost_of_making: { type: String, required: true },
});

const rating = mongoose.Schema({
  movie: {movieSchema},
  rating:{type: String, required: true },
 
});

module.exports = mongoose.model('movie', 'rating');