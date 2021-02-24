const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('article', {
        _id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        author: {
            type: DataTypes.STRING,
        },
        created_at: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING
        },
        url: {
            type: DataTypes.STRING
        }
    }, { id: false, timestamps: false });
};