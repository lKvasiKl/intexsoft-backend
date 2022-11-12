const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync();

const hash = (password) => {
    return bcrypt.hashSync(password, salt);
}

const compare = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

module.exports = {
    hash,
    compare
}