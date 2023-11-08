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

router.get('/', async (req, res) => {
  try {
    const [result] = await peopleDB.findAll();
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await peopleDB.findById(id);
    if (result) {
      return res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: err.sqlMessage });
  }
});


module.exports = router;