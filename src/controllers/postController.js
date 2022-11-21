const postService = require('../services/postService');

const createPost = (req, res) => {
    postService
        .create(req.query.userId, req.body)
        .then((post) => res.status(201).send(post))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const getPost = (req, res) => {
    postService
        .getPost(req.query.userId, req.params['id'])
        .then((post) => res.send(post))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const getAllPosts = (req, res) => {
    postService
        .getAllPosts(req.query.userId)
        .then((post) => res.send(post))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const getUserPosts = (req, res) => {
    postService
        .getUserPosts(req.params['id'], req.query.userId)
        .then((post) => res.send(post))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const getCurrentUserPosts = (req, res) => {
    postService
        .getCurrentUserPosts(req.query.userId)
        .then((post) => res.send(post))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const update = (req, res) => {
    postService
        .update(req.query.userId, req.params['id'], req.body)
        .then((post) => res.send(post))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const deletePost = (req, res) => {
    postService
        .remove(req.params['id'], req.query.userId)
        .then(() => res.status(204).send())
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

module.exports = {
    createPost,
    getPost,
    getAllPosts,
    getUserPosts,
    getCurrentUserPosts,
    update,
    deletePost
}