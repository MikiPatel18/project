const express = require('express');
const router = express.Router();
const ctrlIndex = require('../controllers/movie')


router
.route('/movies')
.get(ctrlMovie.getMovies)
.post(ctrlMovie.createMovie);

router
.route('/movies/:moviesid')
.get(ctrlMovie.getSingleMovie)
.post(ctrlMovie.updateMovie)
.delete(ctrlMovie.deleteMovie);



module.exports = router;