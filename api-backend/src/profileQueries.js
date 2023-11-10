const connection = require('./connection');

const createProfile = async (nome, nome_usuario, email, senha) => {
    const [query] = await connection.execute(`INSERT INTO estante_geek.perfil (nome, nome_usuario, email, senha) VALUES (?, ?, ?, ?)`, [nome, nome_usuario, email, senha]);
    return query;
}

const getAllProfiles = async () => {
    const [query] = await connection.execute('SELECT * FROM estante_geek.perfil');
    return query;
}

const getProfileById = async (id) => {
    const [query] = await connection.execute(`SELECT * FROM estante_geek.perfil WHERE id = ?`, [id]);
    return query;
}

const updateProfile = async (id, nome, nome_usuario, email, senha) => {
    const item = await getProfileById(id);
    if (item.length === 0) {
        return null;
    }
    const [query] = await connection.execute(`UPDATE estante_geek.perfil 
        SET nome = ?, nome_usuario = ?, email = ?, senha = ? WHERE id = ?;`,
    [nome, nome_usuario, email, senha, id]);
    return query;
}

module.exports = {createProfile, getAllProfiles, getProfileById, updateProfile};
