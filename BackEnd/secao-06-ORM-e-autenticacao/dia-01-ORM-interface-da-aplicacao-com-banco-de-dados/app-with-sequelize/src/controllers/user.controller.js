const UserService = require('../services/user.service');

const getAll = async (req, res) => {
  try {
    const users = await UserService.getAll();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' }); 
  }
}

module.exports = {
  getAll,
}