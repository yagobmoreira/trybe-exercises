const connection = require('./connection');

const insert = (person) => {
  return connection.execute(
    `INSERT INTO people (first_name, last_name, email, phone)
      VALUE (?, ?, ?, ?)`,
    [person.firstName, person.lastName, person.email, person.phone],
  );
};

module.exports = {
  insert,
}