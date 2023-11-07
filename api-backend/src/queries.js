const connection = require('./connection');

const getAllActors = async () => {
    const [query] = await connection.execute('SELECT * FROM sakila.actor');
    return query;
};

module.exports = {getAllActors}
