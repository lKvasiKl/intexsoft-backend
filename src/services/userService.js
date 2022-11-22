const userRepository = require('../repositories/userRepository');
const crypt = require('../helpers/crypt');

const getByEmail = (email) => {
    return userRepository.getByEmail(email);
}

const getById = async (id) => {
    const user = await userRepository.getById(id);

    if (!user) {
        throw new Error(`User with id ${id} not found.`);
    }

    return user;
};

const create = async (userData) => {
    const {email, password} = userData;

    const userToRegister = await getByEmail(email);

    if (userToRegister) {
        throw new Error("User with this email already exists.");
    }

    userData.hashPassword = crypt.hash(password);

    return userRepository.create({
        email: email,
        hashPassword: userData.hashPassword,
        firstName: userData.firstName,
        lastName: userData.lastName
    });
};

const update = (id, userData) => {
    const {password} = userData;

    if (password) {
        userData.hashPassword = crypt.hash(password);
    }

    return userRepository.update(id, {
        email: userData.email,
        hashPassword: userData.hashPassword,
        firstName: userData.firstName,
        lastName: userData.lastName
    });
};

const remove = (id) => {
    return userRepository.remove(id);
};

module.exports = {
    getByEmail,
    getById,
    create,
    update,
    remove
}