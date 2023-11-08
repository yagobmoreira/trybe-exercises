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
};

const findById = async (id) => {
  return await connection.execute('SELECT * FROM people WHERE id = ?', [id]);
};

const update = async (person, id) => {
  return await connection.execute(
    `UPDATE people
      SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?`,
    [person.firstName, person.lastName, person.email, person.phone, id],
  );
};

const remove = async (id) => {
  return await connection.execute(
    'DELETE FROM people WHERE id = ?',
    [id],
  );

};

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove, 
}