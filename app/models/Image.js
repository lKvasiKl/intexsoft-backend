const sequelize = require('../util/database');
const {DataTypes} = require('sequelize');

const Image = sequelize.define('images', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    image_url: {type: DataTypes.STRING, allowNull: false},
    is_external: {type: DataTypes.BOOLEAN, allowNull: false}
});

module.exports = Image;