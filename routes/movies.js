const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  router.get('/', async function(req, res, next) {
    const { tags } = req.query;
    try {
      const movies = await moviesService.getMovies({ tags });

      res.status(200).json({
        data: movies,
        message: 'movies retrieved'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:movieId', async function(req, res, next) {
    const { movieId } = req.params;

    try {
      const movie = await moviesService.getMovie({ movieId });

      res.status(200).json({
        data: movie,
        message: 'movies retrieved'
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function(req, res, next) {
    const { body: movie } = req;

    try {
      const createdMovieId = await moviesService.createMovie({ movie });

      res.status(200).json({
        data: createdMovieId,
        message: 'movie created'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:movieId', async function(req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req;

    try {
      const patchedMovie = await moviesService.updateMovie({
        movieId,
        movie
      });

      res.status(200).json({
        data: patchedMovie,
        message: 'movie updated'
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:movieId', async function(req, res, next) {
    const { movieId } = req.params;

    try {
      const deletedMovie = await moviesService.deleteMovie({ movieId });

      res.status(200).json({
        data: deletedMovie,
        message: 'movies deleted'
      });
    } catch (err) {
      next(err);
    }
  });

  router.patch('/:movieId', async function(req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req;

    try {
      const patchedMovie = await moviesService.patchMovie({
        movieId,
        movie
      });

      res.status(200).json({
        data: patchedMovie,
        message: 'movie patched'
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = moviesApi;
