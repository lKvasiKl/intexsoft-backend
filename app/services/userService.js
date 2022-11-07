const User = require('../models/User');

const getByEmail = async (email) => {
    return await User.findOne({
        where: {
            email: email
        }
    });
};

const create = async (email, hash_password, first_name, last_name) => {
    try {
        const USER_MODEL = {
            email: email,
            hash_password: hash_password,
            first_name: first_name,
            last_name: last_name,
        };

        try {
            return await User.create(USER_MODEL);
        } catch (error) {
            //
            return error;
        }
    } catch (error) {
        //
        return error;
    }
};

const getById = async id => {
    try {
        return await User.findByPk(id);
    } catch (error) {
        //
        return error;
    }
};

const getAll = async () => {
    try {
        return await User.findAll();
    } catch (error) {
        //
        return error;
    }
};

const update = async (id, {email, hash_password, first_name, last_name}) => {
    try {
        const USER_MODEL = {
            email: email,
            hash_password: hash_password,
            first_name: first_name,
            last_name: last_name,
        };

        try {
            return await User.update(USER_MODEL, {where: {id}});
        } catch (error) {
            //
            return error;
        }
    } catch (error) {
        //
        return error;
    }
};

const deleteById = async id => {
    try {
        return User.destroy({where: {id}});
    } catch (error) {
        //
        return error;
    }
};

module.exports = {
    getByEmail,
    create,
    getById,
    getAll,
    update,
    deleteById
}