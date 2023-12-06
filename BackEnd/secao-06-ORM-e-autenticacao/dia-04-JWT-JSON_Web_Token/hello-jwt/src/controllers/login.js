const jwt = require('jsonwebtoken');
const service = require('../services/User')

const isBodyValid = (...args) => args.every((arg) => arg);

const secret = process.env.JWT_SECRET;

module.exports = async (req, res) => {
  const { username, password } = req.body;

  if(!isBodyValid(username, password)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const { error: serviceError, token } = await service.login(username, password);
  /* Caso ocorra um erro do tipo `invalidCredentials`,
     retornamos um novo erro com status `401 unauthorized` */
  if (serviceError && serviceError.code === 'invalidCredentials') {
    return next({ statusCode: 401, message: serviceError.message });
  }

  /* Caso haja qualquer outro erro, acionamos o middleware de erro para obter uma mensagem genérica */
  if (serviceError) {
    return next(serviceError);
  }

  return res.status(200).json({ token });
};