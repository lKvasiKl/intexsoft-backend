const Joi = require('joi');
const {
    MIN_EMAIL_LENGTH,
    MIN_PASSWORD_LENGTH
} = require('../constants/validationConstants');

const registerSchema = Joi.object({
    firstName: Joi.string(),

    lastName: Joi.string(),

    email: Joi.string()
        .min(MIN_EMAIL_LENGTH)
        .required()
        .email(),

    password: Joi.string()
        .min(MIN_PASSWORD_LENGTH)
        .required()
});

const loginSchema = Joi.object({
    email: Joi.string()
        .min(MIN_EMAIL_LENGTH)
        .required()
        .email(),

    password: Joi.string()
        .min(MIN_PASSWORD_LENGTH)
        .required()
});

const refreshSchema = Joi.object({
    refreshToken: Joi.string()
        .required(),
});

module.exports = {
    registerSchema,
    loginSchema,
    refreshSchema
}