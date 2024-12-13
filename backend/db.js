const mysql = require('mysql2/promise');

// Configure conforme sua conexão com o banco de dados que usará o arquivo api_db.sql
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '@Henri0202',
    database: 'api_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
