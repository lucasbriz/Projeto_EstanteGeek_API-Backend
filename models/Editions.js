const Edition = (sequelize, DataTypes) => {
    return sequelize.define('Edition', {
        titulo: DataTypes.STRING,
        autor: DataTypes.STRING,
        editora: DataTypes.STRING,
        ano: DataTypes.INTEGER,
        status: DataTypes.BOOLEAN,
        nota: DataTypes.INTEGER,
        comentario: DataTypes.STRING
    });
};

module.exports = Edition;