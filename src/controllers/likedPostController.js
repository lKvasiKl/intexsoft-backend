const likedPostService = require('../services/likedPostService');

const addLike = (req, res) => {
    likedPostService
        .addLikeToPost(req.query.userId, req.params['postId'])
        .then((result) => res.status(201).send(result))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const removeLike = (req, res) => {
    likedPostService
        .removeLikeFromPost(req.query.userId, req.params['postId'])
        .then((result) => res.send(result))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

module.exports = {
    addLike,
    removeLike
}