const userRepository = require('../repositories/userRepository');
const crypt = require('../helpers/crypt');

const getByEmail = async (email) => {
    return await userRepository.getByEmail(email);
}

const getById = async id => {
    return await userRepository.getById(id);
};

const create = async (userData) => {
    const {email, password} = userData;
    const userToRegister = getByEmail(email);
    if (!userToRegister) {
        return new Error("User with this email already exists.");
    }

    userData.hashPassword = crypt.hash(password);

    return await userRepository.create(userData);
};

const update = async (id, userData) => {
    const {password} = userData;
    if (password) {
        userData.hashPassword = crypt.hash(password);
    }

    return await userRepository.update(id, userData);
};

const remove = async id => {
    return await userRepository.remove(id);
};

module.exports = {
    getByEmail,
    getById,
    create,
    update,
    remove
}