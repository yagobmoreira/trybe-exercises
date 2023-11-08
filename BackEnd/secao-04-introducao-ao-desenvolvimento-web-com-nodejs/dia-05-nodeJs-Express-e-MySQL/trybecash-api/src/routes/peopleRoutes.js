const express = require('express');
const peopleDB = require('../db/peopleDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body;
  try {
    const [result] = await peopleDB.insert(person);
    return res.status(201).json(
      { message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json(
      { message: 'Ocorreu um erro ao cadastrar a pessoa' }
    );
  }
});

module.exports = router;