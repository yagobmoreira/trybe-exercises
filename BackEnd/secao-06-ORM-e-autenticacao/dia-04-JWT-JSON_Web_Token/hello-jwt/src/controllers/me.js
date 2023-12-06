module.exports = (req, res) => {
  const { username, admin } = res.locals.user;
  return res.status(200).json({ username, admin })
}