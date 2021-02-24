const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('removed', {
        _id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true
        }
    }, { id: false, timestamps: false });
};