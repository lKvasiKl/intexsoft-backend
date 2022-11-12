const jwt = require('jsonwebtoken');

const generate = (payload, secret, {expiresIn}) => {
    return jwt.sign(payload, secret, {expiresIn})
}

const validate = (token, secret) => {
    return jwt.verify(token, secret)
}

const parse = (token) => {
    return jwt.decode(token);
}

module.exports = {
    generate,
    validate,
    parse
}