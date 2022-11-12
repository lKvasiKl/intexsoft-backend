const authService = require('../services/authService');

const register = async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        res.send("Data not full.");
    }

    const result = await authService.register(req.body);
    if (result) {
        return res.status(201).json({result});
    }
};

const login = async (req, res) => {
    const result = await authService.login(req.body);

    if (result) {
        const {accessToken, refreshToken} = result;
        return res.json({accessToken, refreshToken});
    }
};

const refresh = (req, res) => {
    const {refreshToken} = req.body;
    const result = authService.refresh({refreshToken});

    if (result) {
        const {accessToken, refreshToken} = result;
        return res.json({accessToken, refreshToken});
    }
};

module.exports = {
    register,
    login,
    refresh
};

