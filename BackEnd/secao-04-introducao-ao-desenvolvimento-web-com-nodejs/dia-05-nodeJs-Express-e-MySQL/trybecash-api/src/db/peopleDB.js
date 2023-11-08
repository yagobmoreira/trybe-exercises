const connection = require('./connection');

const insert = async (person) => {
  return await connection.execute(
    `INSERT INTO people (first_name, last_name, email, phone)
      VALUE (?, ?, ?, ?)`,
    [person.firstName, person.lastName, person.email, person.phone],
  );
};

const findAll = async () => {
  return await connection.execute('SELECT * FROM people');
}

const findById = async (id) => {
  return await connection.execute('SELECT * FROM people WHERE id = ?', [id]);
}

module.exports = {
  insert,
  findAll,
  findById,
}