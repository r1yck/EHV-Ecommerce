const mysql = require('mysql2/promise');

// Criação do pool de conexões com o banco de dados MySQL
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
