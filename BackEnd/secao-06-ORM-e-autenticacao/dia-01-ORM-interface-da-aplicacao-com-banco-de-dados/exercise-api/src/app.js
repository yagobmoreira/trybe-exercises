const express = require('express');

const app = express();

app.use(express.json());

app.get('/health/live', (_req, res) => {
  return res.sendStatus(200);
})

module.exports = app;