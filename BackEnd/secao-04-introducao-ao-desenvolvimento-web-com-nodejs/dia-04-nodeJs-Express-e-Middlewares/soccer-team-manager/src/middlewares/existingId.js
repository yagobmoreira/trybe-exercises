const teams = require('../utils/teams');

const existingId = (req, res, next) => {
  const { id } = req.params;
  if (teams.some((team) => team.id === Number(id))) {
    next();
  } else {
    return res.status(404).send({ message: 'Id inexistente' });
  }
};

module.exports = existingId;