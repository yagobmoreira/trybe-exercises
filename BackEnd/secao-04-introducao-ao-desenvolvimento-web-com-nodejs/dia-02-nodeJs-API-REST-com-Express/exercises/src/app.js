const express = require('express');
const { readData } = require('./utils/index');

const app = express();

app.use(express.json());

app.get('/movies/:id([0-9]+)', async (req, res) => {
  const { id } = req.params;
  const movies = await readData();
  const findTeam = movies.find((film) => film.id === Number(id));
  if (!findTeam) {
    return res.status(404).json({ message: 'Filme não encontrado' });
  }
  return res.status(200).json({ findTeam });
});

app.get('/movies', async (req, res) => {
  const movies = await readData();
  return res.status(200).json({ movies });
});

app.post('/movies', async (req, res) => {
  const { movie, price } = req.body;
  const movies = await readData();
  const id = movies.length + 1;
  const newMovie = { id, movie, price };
  movies.push(newMovie);
  return res.status(201).json({ newMovie });
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { movie: updatedMovie, price: updatedPrice } = req.body;
  const movies = await readData();
  const movieIndex = movies.findIndex((movie) => movie.id === Number(id));
  const upMovie = { id: Number(id), updatedMovie, updatedPrice };
  movies[movieIndex] = upMovie;
  return res.status(204).end();
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readData();
  const movieIndex = movies.findIndex((movie) => movie.id === Number(id));
  movies.splice(movieIndex, 1);

  return res.status(200).end();
});

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await readData();
    if (q) {
      const filteredMovies = movies
        .filter((film) => film.movie.toLowerCase()
        .includes(q.toLowerCase()));
      return res.status(200).json({ filteredMovies });
    }
    res.status(200).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
module.exports = app;