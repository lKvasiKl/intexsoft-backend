const sequelize = require('../util/database');
const {DataTypes} = require('sequelize');

const ImagePost = sequelize.define('images_posts', {
    image_id: {type: DataTypes.INTEGER, foreignKey: true, allowNull: false},
    post_id: {type: DataTypes.INTEGER, foreignKey: true, allowNull: false}
});

module.exports = ImagePost;