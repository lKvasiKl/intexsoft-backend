const router = require('express').Router();
const {celebrate} = require('celebrate');
const authSchemas = require('../validation/authSchemas');

const {
    register,
    login,
    refresh
} = require('../controllers/authController');

router.post("/register", celebrate(authSchemas.register), register);
router.post("/login", celebrate(authSchemas.login), login);
router.get("/refresh", celebrate(authSchemas.refresh), refresh);

module.exports = router;