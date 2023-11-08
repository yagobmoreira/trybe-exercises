const connection = require('./connection');

const insert = (person) => {
  return connection.execute(
    `INSERT INTO people (first_name, last_name, email, phone)
      VALUE (?, ?, ?, ?)`,
    [person.firstName, person.lastName, person.email, person.phone],
  );
};

const findAll = () => {
  return connection.execute('SELECT * FROM people');
}

const findById = (id) => {
  return connection.execute('SELECT * FROM people WHERE id = ?', [id]);
}

module.exports = {
  insert,
  findAll,
  findById,
}