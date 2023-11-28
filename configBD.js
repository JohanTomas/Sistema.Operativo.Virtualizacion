const mysql = require("mysql2/promise");

const connection = mysql.createConnection({
  host: "localhost",
  user: "johan",
  password: "tomas",
  database: "nodejs",
  port: 3306,
});

// No es necesario llamar a connection.connect manualmente

module.exports = connection;
/*
 * En Node.js, module es un objeto global que representa el módulo actual
 * en el cual se está ejecutando el código. Proporciona una forma de exportar
 * valores desde un módulo para que puedan ser utilizados en otros módulos.
 */
