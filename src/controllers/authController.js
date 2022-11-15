const authService = require('../services/authService');

const register = (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        res.send("Data not full.");
    }

    authService
        .register(req.body)
        .then(() => res.status(201).send('Ok'))
        .catch((e) => {
            res.status(400).send(e)
        });
};

const login = (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        res.send("Data not full.");
    }

    authService
        .login(req.body)
        .then((tokensPair) => res.send(tokensPair))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const refresh = (req, res) => {
    const {refreshToken} = req.body;

    if (!refreshToken) {
        res.status(400).send("Refresh token is required.");
    }

    authService
        .refresh({refreshToken})
        .then((tokensPair) => res.send(tokensPair))
        .catch((e) => {
            res.send(e);
        });
};

module.exports = {
    register,
    login,
    refresh
};

