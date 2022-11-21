const {Joi, Segments} = require('celebrate');

const {
    MAX_POST_COMMENT_LENGTH
} = require('../constants/validationConstants');

const createComment = {
    [Segments.BODY]: Joi.object({
        text: Joi.string()
            .max(MAX_POST_COMMENT_LENGTH)
            .required()
    })
};

module.exports = {
    createComment
}