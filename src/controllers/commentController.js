const commentService = require('../services/commentService');

const create = (req, res) => {
    commentService
        .create(req.query.userId, +req.params.postId, req.body)
        .then((comment) => res.status(201).send(comment))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const getPostComments = (req, res) => {
    commentService
        .getPostComments(req.params.postId)
        .then((comment) => res.status(201).send(comment))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const update = (req, res) => {
    commentService
        .update(req.query.userId, req.params.id, req.body)
        .then((comment) => res.status(201).send(comment))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const remove = (req, res) => {
    commentService
        .remove(req.params.id, req.query.userId)
        .then(() => res.status(204).send())
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

module.exports = {
    create,
    getPostComments,
    update,
    remove
}