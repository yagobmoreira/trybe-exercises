const express = require('express');

const app = express();
app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPFC',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Olá mundo!',
  });
});

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  // console.log(newTeam);
  teams.push(newTeam);
  return res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;
  const updateTeam = teams.find((team) => team.id === Number(id));
  if (!updateTeam) {
    return res.status(404).json({ message: 'Team not found' });
  }
  updateTeam.name = name;
  updateTeam.initials = initials;

  return res.status(200).json({ updateTeam });
});

app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  const findTeam = teams.find((team) => team.id === Number(id));
  if (!findTeam) {
    return res.status(404).json({ message: 'Team not found' });
  }
  return res.status(200).json({ findTeam });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  return res.status(200).end();
});

module.exports = app;
