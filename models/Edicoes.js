const Edicao = (sequelize, DataTypes) => {
    return sequelize.define('Edicao', {
        titulo: DataTypes.STRING,
        autor: DataTypes.STRING,
        editora: DataTypes.STRING,
        ano: DataTypes.INTEGER
    });
};

module.exports = Edicao;