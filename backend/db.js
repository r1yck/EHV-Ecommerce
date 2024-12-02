const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost', // ou o endereço do seu banco
    user: 'root',      // substitua pelo usuário do seu banco
    password: '@Henri0202', // senha do banco
    database: 'api_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
