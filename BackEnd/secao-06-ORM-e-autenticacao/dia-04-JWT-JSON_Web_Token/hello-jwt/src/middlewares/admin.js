module.exports = (req, res, next) => {
  const { user } = res.locals;

  if (!user) {
    const err = new Error('This endpoint requires authentication');  
    err.statusCode = 401;
    return next(err);
  }

  if (!user.admin) {
    const err = new Error('Restricted access');
    err.statusCode = 403;
    return next(err);
  }

  return next()
};
