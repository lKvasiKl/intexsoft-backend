const Joi = require('joi');
const validateRequest = require('./validateRequest');

const register = (req, res, next) => {
    const schema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().min(3).required().email(),
        password: Joi.string().min(6).required(),
        confirm_password: Joi.string().min(6).required().valid(Joi.ref("password"))
    });
    validateRequest(req, next, schema);
};

const login = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().min(3).required().email(),
        password: Joi.string().min(6).required()
    });
    validateRequest(req, next, schema);
};

module.exports = {
    register,
    login
}