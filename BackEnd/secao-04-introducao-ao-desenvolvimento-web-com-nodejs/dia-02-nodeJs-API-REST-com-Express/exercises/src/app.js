const express = require('express');
const { readData } = require('./utils/index');

const app = express();

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
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
})


module.exports = app;