const authService = require('../services/authService');

const register = async (req, res) => {
    const {email, password, lastName, firstName} = req.body;
    if (!email || !password) {
        res.status(400).send();
    }

    const result = await authService.register({email, password, lastName, firstName});
    if (result) {
        return res.status(201).json({result});
    }
};

const login = async (req, res) => {
    const {email, password} = req.body;
    const result = authService.login({email, password});

    if (result) {
        const {accessToken, refreshToken} = result;
        return res.json({accessToken, refreshToken});
    }
};

const refresh = async (req, res) => {
    const {refreshToken} = req.body;
    const accessToken = authService.refresh({refreshToken});
    return res.json({accessToken: accessToken});
};

module.exports = {
    register,
    login,
    refresh
};

