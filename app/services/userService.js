const User = require('../models/User');

const getByEmail = async email => {
    return await User.findOne({
        where: {
            email: email
        }
    });
};

const create = async (email, hash_password, first_name, last_name) => {
    const USER_MODEL = {
        email: email,
        hash_password: hash_password,
        first_name: first_name,
        last_name: last_name,
    };

    const user = User.create(USER_MODEL);
    return await user.save();
};

const getById = async id => {
    return await User.findByPk(id);
};

const getAll = async () => {
    return await User.findAll();
};

const update = async (id, {email, hash_password, first_name, last_name}) => {
    const USER_MODEL = {
        email: email,
        hash_password: hash_password,
        first_name: first_name,
        last_name: last_name,
    };
    return await User.update(USER_MODEL, {where: {id: id}});
};

const deleteById = async id => {
    return User.destroy({where: {id: id}});
};

module.exports = {
    getByEmail,
    create,
    getById,
    getAll,
    update,
    deleteById
}