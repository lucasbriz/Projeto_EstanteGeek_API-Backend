const Edition = (sequelize, DataTypes) => {
    return sequelize.define('Edition', {
        titulo: DataTypes.STRING,
        autor: DataTypes.STRING,
        editora: DataTypes.STRING,
        ano: DataTypes.INTEGER
    });
};

module.exports = Edition;