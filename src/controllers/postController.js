const postService = require('../services/postService');

const create = (req, res) => {
    postService
        .create(req.query.userId, req.body)
        .then((post) => res.status(201).send(post))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const update = (req, res) => {
    postService
        .update(req.query.userId, +req.params.id, req.body)
        .then((post) => res.send(post))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const remove = (req, res) => {
    postService
        .remove(+req.params.id, req.query.userId)
        .then(() => res.status(204).send())
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const getPost = (req, res) => {
    const {filter} = req.body;

    postService
        .getPost(filter)
        .then((post) => res.send(post))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const like = (req, res) => {
    postService
        .like(+req.params.id, req.query.userId)
        .then(() => res.status(204).send())
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

module.exports = {
    create,
    update,
    remove,
    getPost,
    like
}