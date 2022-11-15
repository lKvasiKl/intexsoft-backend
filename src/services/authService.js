require('dotenv').config();
const userService = require('./userService');
const crypt = require('../helpers/crypt');
const jwt = require('../helpers/jwt');
const {removePassword} = require('../helpers/user')

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
const ACCESS_TOKEN_LIFETIME = process.env.ACCESS_TOKEN_LIFETIME;
const REFRESH_TOKEN_LIFETIME = process.env.REFRESH_TOKEN_LIFETIME;

const createTokensPair = (userData) => {
    const {id} = userData;
    const accessToken = jwt.generate(
        {id},
        JWT_ACCESS_SECRET,
        {expiresIn: ACCESS_TOKEN_LIFETIME}
    );

    const refreshToken = jwt.generate(
        {id},
        JWT_REFRESH_SECRET,
        {expiresIn: REFRESH_TOKEN_LIFETIME}
    )

    return {accessToken, refreshToken};
}

const register = async (userData) => {
    return userService
        .create(userData)
        .then((user) => removePassword(user))
        .catch((e) => console.log(e));
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

    return createTokensPair({id});
};

module.exports = {
    register,
    login,
    refresh
};
