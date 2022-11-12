const router = require('express').Router();
const {register, login, refresh} = require('../controllers/authController');
const authValidator = require('../validation/authValidator');

router.post(
    "/register",
    authValidator.register,
    register
);

router.post(
    "/login",
    authValidator.login,
    login
);

router.get(
    "/refresh",
    refresh
);

module.exports = router;