const Edition = (sequelize, DataTypes) => {
    return sequelize.define('Edition', {
        titulo: DataTypes.STRING,
        autor: DataTypes.STRING,
        editora: DataTypes.STRING,
        ano: DataTypes.INTEGER,
        num_paginas: DataTypes.INTEGER
    });
};

module.exports = Edition;