// src/app.js

const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const teamsRouter = require('./routes/teamsRouter');

const app = express();

// Configuramos um limitador para uma taxa máxima de 100 requisições em um intervalo de 15 minutos
const limiter = rateLimit({
   max: 100, // número máximo de requisições
   windowMs: 15 * 60 * 1000, // intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
   message: 'Muitas requisições originadas desta IP', // mensagem personalizada quando atinge o limit rate
});

app.use(express.json());
app.use(express.static('./images'));
app.use(morgan('dev'));
app.use(limiter);
app.use(teamsRouter);

app.use((err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;