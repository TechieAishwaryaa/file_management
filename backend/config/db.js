const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',      // Change this to your DB host
  user: 'root',           // Your MySQL username
  password: 'Suryawanshi@24',   // Your MySQL password
  database: 'filedb',     // Your MySQL database name
});

module.exports = pool.promise();
