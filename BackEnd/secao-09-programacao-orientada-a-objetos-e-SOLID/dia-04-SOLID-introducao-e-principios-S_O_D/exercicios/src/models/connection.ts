import mysql from 'mysql2/promise';

export default mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password', // senha do seu banco de dados
  port: 3306,
  database: 'TypeScriptExpress',
});
