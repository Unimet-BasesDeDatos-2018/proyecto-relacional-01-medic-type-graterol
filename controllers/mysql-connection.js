const mysql = require('mysql');

// Crear la coneccion a la base de datos:
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'MedicDatabase'
});

module.exports.mysqlConnection = connection;
