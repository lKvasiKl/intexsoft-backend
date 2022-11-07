const sequelize = require('../util/database');
const {DataTypes} = require('sequelize');

const UserLikedPost = sequelize.define('users_liked_posts', {
    user_id: {type: DataTypes.INTEGER, foreignKey: true, allowNull: false},
    post_id: {type: DataTypes.INTEGER, foreignKey: true, allowNull: false}
});

module.exports = UserLikedPost;