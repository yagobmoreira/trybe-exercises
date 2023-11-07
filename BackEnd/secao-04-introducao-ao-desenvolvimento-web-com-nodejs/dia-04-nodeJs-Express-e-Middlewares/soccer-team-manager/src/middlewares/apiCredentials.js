const fs = require('fs').promises;

const apiCredentials = async (req, res, next) => {
  const token = req.header('X-API-TOKEN');
  
  const authdata = await fs.readFile('./authdata.json', { encoding: 'utf-8' });

  const authorized = JSON.parse(authdata);

  if (token in authorized) {
    next();
  } else {
    res.status(401).send({ message: 'Não autorizado' });
  }
};

module.exports = apiCredentials;