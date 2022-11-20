require('dotenv').config();
const userService = require('./userService');
const crypt = require('../helpers/crypt');
const jwt = require('../helpers/jwt');
const {removePassword} = require('../helpers/user')

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
const ACCESS_TOKEN_TTL = process.env.ACCESS_TOKEN_TTL;
const REFRESH_TOKEN_TTL = process.env.REFRESH_TOKEN_TTL;

const createTokensPair = (userData) => {
    const {id} = userData;
    const accessToken = jwt.generate(
        {id},
        JWT_ACCESS_SECRET,
        ACCESS_TOKEN_TTL
    );

    const refreshToken = jwt.generate(
        {id},
        JWT_REFRESH_SECRET,
        REFRESH_TOKEN_TTL
    )

    return {accessToken, refreshToken};
}

const register = (userData) => {
    return userService
        .create(userData)
        .then((user) => createTokensPair(removePassword(user)))
        .catch();
};

const login = async (userData) => {
    const {email, password} = userData;
    const foundedUser = await userService.getByEmail(email);

    if (!foundedUser) {
        throw new Error("User with this email doesn't exists.")
    }

    const isPasswordValid = crypt.compare(
        password,
        foundedUser.hashPassword
    )

    if (!isPasswordValid) {
        throw new Error("Password not valid.");
    }

    return createTokensPair(removePassword(foundedUser));
};

const refresh = async ({refreshToken}) => {
    const isValid = jwt.validate(refreshToken, JWT_REFRESH_SECRET);

    if (!isValid) {
        throw new Error("Refresh token not valid.");
    }

    const {id} = jwt.parse(refreshToken);
    const userData = await userService.getById(id);

    return createTokensPair(userData);
};

module.exports = {
    register,
    login,
    refresh
};
