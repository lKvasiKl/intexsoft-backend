const postService = require('../services/postService');
const {paginationToResponse} = require('../helpers/pagination');

const getPosts = (req, res) => {
    const {filter, pagination} = req.body;

    postService
        .getPosts(filter, pagination.page)
        .then((post) => res.send({
            data: post.data,
            pagination: paginationToResponse(post.count, pagination.page)
        }))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const getUserPosts = (req, res) => {
    const {pagination} = req.body;

    postService
        .getPostsByUser(+req.params.id, pagination.page)
        .then((post) => res.send({
            data: post.data,
            pagination: paginationToResponse(post.count, pagination.page)
        }))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const getCurrentUserPosts = (req, res) => {
    const {pagination} = req.body;

    postService
        .getPostsByUser(req.query.userId, pagination.page)
        .then((post) => res.send({
            data: post.data,
            pagination: paginationToResponse(post.count, pagination.page)
        }))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const getAllCurrentUserPosts = (req, res) => {
    postService
        .getAllCurrentUserPosts(req.query.userId)
        .then((post) => res.send(post))
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

module.exports = {
    getPosts,
    getUserPosts,
    getCurrentUserPosts,
    getAllCurrentUserPosts
}