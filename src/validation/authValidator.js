const Joi = require('joi');
const validateRequest = require('./validateRequest');
const {MIN_EMAIL_LENGTH, MIN_PASSWORD_LENGTH} = require('../constants/validationConstants');

const register = (req, res, next) => {
    const schema = Joi.object({
        firstName: Joi.string(),
        lastName: Joi.string(),
        email: Joi.string().min(MIN_EMAIL_LENGTH).required().email(),
        password: Joi.string().min(MIN_PASSWORD_LENGTH).required()
    });
    validateRequest(req, next, schema);
};

const login = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().min(MIN_EMAIL_LENGTH).required().email(),
        password: Joi.string().min(MIN_PASSWORD_LENGTH).required()
    });
    validateRequest(req, next, schema);
};

module.exports = {
    register,
    login
}