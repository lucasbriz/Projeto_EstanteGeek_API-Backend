const mysql = require('mysql2/promise');

const connection = mysql.createPool(
    {
        host: 'localhost',
        port: 3308,
        database: 'estante_geek',
        user: 'root',
        password: 'root',
    }
);

module.exports = connection;