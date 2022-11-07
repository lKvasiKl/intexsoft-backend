const router = require('express').Router();
const {register, login, refresh} = require('../controllers/authController');
const AuthValidator = require('../validation/authValidator');

router.post("/register", AuthValidator.register, register);
router.post("/login", AuthValidator.login, login);
router.get("/refresh", refresh);

module.exports = router;