const connection = require('./connection');

const getAllActors = async () => {
    const [query] = await connection.execute('SELECT * FROM sakila.actor');
    return query;
};

const getActorsById = async (id) => {
    const [query] = await connection.execute(`SELECT * FROM sakila.actor WHERE actor_id = ?`, [id]);
    return query;
}

const createActor = async (first_name, last_name) => {
    const [query] = await connection.execute(`INSERT INTO sakila.actor (first_name, last_name) VALUES (?, ?)`, [first_name, last_name]);
    return query;
}

const createEdition = async (titulo, autor, selo, ano, num_paginas, condicao_novo) => {
    const [query] = await connection.execute(`INSERT INTO estante_geek.edicao (titulo, autor, selo, ano, num_paginas, condicao_novo) VALUES (?, ?, ?, ?, ?, ? )`, [titulo, autor, selo, ano, num_paginas, condicao_novo]);
    return query;
}

module.exports = {getAllActors, getActorsById, createActor, createEdition}
