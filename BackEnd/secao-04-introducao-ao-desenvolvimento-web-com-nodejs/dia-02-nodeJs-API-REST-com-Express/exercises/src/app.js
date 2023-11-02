const express = require('express');
const { readData } = require('./utils/index');

const app = express();

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const data = await readData();
  const findTeam = data.find((film) => film.id === Number(id));
  if (!findTeam) {
    return res.status(404).json({ message: 'Filme não encontrado' });
  }
  return res.status(200).json({ findTeam });
});


module.exports = app;