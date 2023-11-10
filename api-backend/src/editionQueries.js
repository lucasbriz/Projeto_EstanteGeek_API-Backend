const connection = require('./connection');

const createEdition = async (titulo, autor, editora, ano, num_paginas, condicao_novo) => {
    const [query] = await connection.execute(`INSERT INTO estante_geek.edicao (titulo, autor, editora, ano, num_paginas, condicao_novo) VALUES (?, ?, ?, ?, ?, ? )`, [titulo, autor, editora, ano, num_paginas, condicao_novo]);
    return query;
}

const getAllEditions = async () => {
    const [query] = await connection.execute('SELECT * FROM estante_geek.edicao');
    return query;
}

const getEditionById = async (id) => {
    const [query] = await connection.execute(`SELECT * FROM estante_geek.edicao WHERE id = ?`, [id]);
    return query;
}

const updateEdition = async (id, titulo, autor, editora, ano, num_paginas, condicao_novo) => {
    const item = await getEditionById(id);
    if (item.length === 0) {
        return null;
    }
    const [query] = await connection.execute(`UPDATE estante_geek.edicao 
        SET titulo = ?, autor = ?, editora = ?, ano = ?, num_paginas = ?, condicao_novo = ?
        WHERE id = ?;`,
    [titulo, autor, editora, ano, num_paginas, condicao_novo, id]);
    return query;
}

const deleteEdition = async (id) => {
    const item = await getEditionById(id);
    if (item.length === 0) {
        return null;
    }
    const [query] = await connection.execute(`DELETE FROM estante_geek.edicao WHERE id = ?;`, [id]);
    return query;
}

module.exports = {createEdition, getAllEditions, getEditionById, updateEdition, deleteEdition};