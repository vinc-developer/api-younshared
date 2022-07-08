const mysql = require('mysql2/promise');

/* creation d'un pool de connexion */
async function getConnection() {
  try {
    return await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
  } catch (error) {
    throw 'Data access error';
  }
}
module.exports = {
  getConnection
}
