const mysql = require('mysql2/promise');

// Create a connection pool to your DogWalkService database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',           // <-- Add your MySQL password if you have one
  database: 'DogWalkService',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
