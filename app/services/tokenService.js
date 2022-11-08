require('dotenv').config();
const jwt = require('jsonwebtoken');

const JWT_ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_SECRET;

const generateTokens = id => {
    const accessToken = jwt.sign(id, JWT_ACCESS_TOKEN_SECRET, {expiresIn: "30m"});
    const refreshToken = jwt.sign(id, JWT_REFRESH_TOKEN_SECRET, {expiresIn: "5d"});

    return {
        accessToken,
        refreshToken
    };
};

const validateAccessToken = token => {
    try {
        return jwt.verify(token, JWT_ACCESS_TOKEN_SECRET);
    } catch {
        return null;
    }
};

const validateRefreshToken = token => {
    try {
        return jwt.verify(token, JWT_REFRESH_TOKEN_SECRET);
    } catch {
        return null;
    }
};

module.exports = {
    generateTokens,
    validateAccessToken,
    validateRefreshToken
}