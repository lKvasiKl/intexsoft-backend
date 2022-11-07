const sequelize = require('../util/database');
const {DataTypes} = require('sequelize');

const Post = sequelize.define('posts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    user_id: {type: DataTypes.INTEGER, foreignKey: true, allowNull: false}
});

module.exports = Post;