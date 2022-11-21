const authService = require('../services/authService');

const register = (req, res) => {
    authService
        .register(req.body)
        .then((tokensPair) => res.status(201).send(tokensPair))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const login = (req, res) => {
    authService
        .login(req.body)
        .then((tokensPair) => res.send(tokensPair))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const refresh = (req, res) => {
    authService
        .refresh(req.body)
        .then((tokensPair) => res.send(tokensPair))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

module.exports = {
    register,
    login,
    refresh
};

