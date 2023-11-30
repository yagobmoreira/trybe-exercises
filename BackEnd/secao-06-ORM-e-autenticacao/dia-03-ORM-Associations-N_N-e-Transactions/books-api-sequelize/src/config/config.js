module.exports = {
  development: {
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'senha_mysql',
    database: `${process.env.DATABASE_NAME || 'books_database'}_development`,
    host: process.env.DATABASE_HOSTNAME || 'localhost',
    port: process.env.DATABASE_PORT || 3306,
    dialect: 'mysql',
  },
  test: {
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'senha_mysql',
    database: `${process.env.DATABASE_NAME || 'books_database'}_test`,
    host: process.env.DATABASE_HOSTNAME || 'localhost',
    port: process.env.DATABASE_PORT || 3306,
    dialect: 'mysql',
  },
  production: {
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'senha_mysql',
    database: `${process.env.DATABASE_NAME || 'books_database'}_production`,
    host: process.env.DATABASE_HOSTNAME || 'localhost',
    port: process.env.DATABASE_PORT || 3306,
    dialect: 'mysql',
  },
};
