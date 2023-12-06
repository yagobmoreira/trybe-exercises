const jwt = require('jsonwebtoken');

const isBodyValid = (...args) => args.every((arg) => arg);

const secret = process.env.JWT_SECRET;

module.exports = (req, res) => {
  const { username, password } = req.body;

  if(!isBodyValid(username, password)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };

  const admin = (username === 'admin' && password === 's3nh4S3gur4???');

  const payload = { 
    username,
    admin
  };

  const token = jwt.sign(payload, secret, jwtConfig);

  return res.status(200).json({ token });
};