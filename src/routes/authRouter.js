const router = require('express').Router();
const validateRequest = require('../middlewares/validateRequest');
const {
    registerSchema,
    loginSchema,
    refreshSchema
} = require('../validation/authValidator');
const {
    register,
    login,
    refresh
} = require('../controllers/authController');

router.post(
    "/register",
    validateRequest(registerSchema, "body"),
    register
);

router.post(
    "/login",
    validateRequest(loginSchema, "body"),
    login
);

router.get(
    "/refresh",
    validateRequest(refreshSchema, "body"),
    refresh
);

module.exports = router;