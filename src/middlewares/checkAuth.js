const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.query.userId = user.id;
        next();
    } catch (e) {
        res.status(401).send("Unauthorised");
    }
}