const axios = require('axios');
const express = require('express');
const keys = require('../../../keys.json');
const API_KEY = keys.tmdb;
const router = express.Router();
const BASE_URL = 'https://api.themoviedb.org/3';

router.get('/movies', async (req, res) => {
  // https://api.themoviedb.org/3/movie/popular?api_key=5fbbf2a059aaa52de843de73c0c7f1e0&language=en-US&page=1
  const { data } = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  res.json(data.results);
});
router.get('/search/movies', async (req, res) => {
  const { term } = req.query;
  const { data } = await axios.get(`${BASE_URL}/search/movie?query=${term}&api_key=${API_KEY}`);
  res.json(data.results);
});
router.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  res.json(data);
});

module.exports = router;
