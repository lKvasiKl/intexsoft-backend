const validateRequest = (req, next, schema) => {
    const {error} = schema.validate(req.body);

    if (error) {
        next({
            message: `Validation error: ${error.details.map((error) => error.message).join(',')}`
        });
    } else {
        next();
    }
};

module.exports = validateRequest;