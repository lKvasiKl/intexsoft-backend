const validateRequest = (schema, property) => {
    return (req, res, next) => {
        const { error } = schema.validate(req[property]);

        if(error) {
            const {details} = error;
            const message = details.map((error) => error.message).join(",");
            console.log("Error: ", message);res.status(422).json({ error: message });
        } else {
            next();
        }
    };
};

module.exports = validateRequest;