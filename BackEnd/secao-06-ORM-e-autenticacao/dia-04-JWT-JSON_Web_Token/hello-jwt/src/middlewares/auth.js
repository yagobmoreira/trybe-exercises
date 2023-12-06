const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const bearerToken = req.header('Authorization');
  
  if (!bearerToken) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }

  const [, token] = bearerToken.split(' ');

  try {
    const payload = jwt.verify(token, secret);

    res.locals.user = payload;

    return next();
  } catch (err) {
    err.statusCode = 401;

    return next(err);
  }
};
