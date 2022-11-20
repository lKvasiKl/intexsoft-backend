const {Joi, Segments} = require('celebrate');
const {
    MIN_EMAIL_LENGTH,
    MIN_PASSWORD_LENGTH
} = require('../constants/validationConstants');

const register = {
    [Segments.BODY]: Joi.object({
        email: Joi.string()
            .min(MIN_EMAIL_LENGTH)
            .required()
            .email(),

        password: Joi.string()
            .min(MIN_PASSWORD_LENGTH)
            .required(),

        firstName: Joi.string(),

        lastName: Joi.string()
    })
};

const login = {
    [Segments.BODY]: Joi.object({
        email: Joi.string()
            .min(MIN_EMAIL_LENGTH)
            .required()
            .email(),

        password: Joi.string()
            .min(MIN_PASSWORD_LENGTH)
            .required()
    })
};

const refresh = {
    [Segments.BODY]: Joi.object({
        refreshToken: Joi.string()
            .required(),
    })
};

module.exports = {
    register,
    login,
    refresh
}