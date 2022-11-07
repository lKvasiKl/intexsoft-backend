const sequelize = require('../util/database');
const {DataTypes} = require('sequelize');

const User = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    hash_password: {type: DataTypes.STRING, allowNull: false},
    first_name: {type: DataTypes.STRING, allowNull: false},
    last_name: {type: DataTypes.STRING, allowNull: false},
    avatar_id: {type: DataTypes.INTEGER, foreignKey: true, allowNull: true}
});

module.exports = User;