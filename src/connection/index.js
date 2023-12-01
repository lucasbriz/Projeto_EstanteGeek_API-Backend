const mysql = require('mysql2/promise');

const connection = mysql.createPool(
    {
        host: 'localhost',
        port: 3306,
        database: 'estante_geek',
        user: 'root',
        password: '4268',
    }
);

module.exports = connection;