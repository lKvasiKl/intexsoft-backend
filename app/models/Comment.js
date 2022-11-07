const sequelize = require('../util/database');
const {DataTypes} = require('sequelize');

const Comment = sequelize.define('comments', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false},
    user_id: {type: DataTypes.INTEGER, foreignKey: true, allowNull: false},
    post_id: {type: DataTypes.INTEGER, foreignKey: true, allowNull: false}
});

module.exports = Comment;