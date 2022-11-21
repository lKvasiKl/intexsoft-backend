const {Joi, Segments} = require('celebrate');

const {
    MAX_POST_DESCRIPTION_LENGTH
} = require('../constants/validationConstants');

const createPost = {
    [Segments.BODY]: Joi.object({
        description: Joi.string()
            .max(MAX_POST_DESCRIPTION_LENGTH)
            .required()
    })
};

module.exports = {
    createPost
}