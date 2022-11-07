require('dotenv').config();
const bcrypt = require('bcrypt');
const tokenService = require('./tockenService');
const userService = require('./userService');

const PASSWORD_SALT = process.env.PASSWORD_SALT;

const register = async ({firstName, lastName, email, password}) => {
    const candidate = userService.getByEmail(email);
    if(candidate) {
        //
        return candidate;
    }

    const hashPassword = await bcrypt.hash(password, PASSWORD_SALT);
    return userService.create(email, hashPassword, firstName, lastName);
};

const login = ({email, password}) => {
    const user = userService.getByEmail(email);
    if(!user) {
        //
        return user;
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if(!validPassword){
        //
        return validPassword;
    }

    return tokenService.generateTokens(user.id);
};

const refresh = ({refreshToken}) => {
    if(!refreshToken) {
        //
        return null;
    }

    const user = userService
};

module.exports = {
    register,
    login,
    refresh
};
