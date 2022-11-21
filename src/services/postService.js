const postRepository = require('../repositories/postRepository');
const likedPostService = require('../services/likedPostService');
const userService = require('../services/userService');

const create = (currentUserId, body) => {
    return postRepository
        .create({
            userId: currentUserId,
            description: body.description,
            createdAt: new Date()
        })
        .catch();
};

const getPost = async (currentUserId, postId) => {
    const foundedPost = getPostById(postId);

    foundedPost.likesAmount = await likedPostService.getPostLikes(postId);
    foundedPost.isLiked = await likedPostService.isLikedPost(currentUserId, postId);

    return foundedPost;
};

const getPostById = async (postId) => {
    const foundedPost = await postRepository.getById(postId);

    if (!foundedPost) {
        throw new Error(`Post with id ${postId} doesn't exists.`)
    }

    return foundedPost;
};

const getAllPosts = async (currentUserId) => {
    const foundedPosts = await postRepository.getAll();

    for (const post of foundedPosts) {
        post.likesAmount = await likedPostService.getPostLikes(post.id);
        post.isLiked = await likedPostService.isLikedPost(currentUserId, post.id);
    }

    return foundedPosts;
};

const getUserPosts = async (userId, currentUserId) => {
    await userService.getById(userId);

    const foundedPosts = await postRepository.getUserPosts(userId);

    for (const post of foundedPosts) {
        post.likesAmount = await likedPostService.getPostLikes(post.id);
        post.isLiked = await likedPostService.isLikedPost(currentUserId, post.id);
    }

    return foundedPosts;
};

const getCurrentUserPosts = async (currentUserId) => {
    const foundedPosts = await postRepository.getUserPosts(currentUserId);

    for (const post of foundedPosts) {
        post.likesAmount = await likedPostService.getPostLikes(post.id);
        post.isLiked = await likedPostService.isLikedPost(currentUserId, post.id);
    }

    return foundedPosts;
};

const update = async (currentUserId, postId, body) => {
    const foundedPost = await postRepository.getById(postId);

    if (foundedPost?.userId !== currentUserId) {
        throw new Error('Access denied!');
    }

    return postRepository
        .update(
            postId, {
            userId: currentUserId,
            description: body.description,
            createdAt: body.createdAt
        })
        .catch()
}

const remove = async (postId, currentUserId) => {
    const foundedPost = await postRepository.getById(postId);

    if (foundedPost?.userId !== currentUserId) {
        throw new Error('Access denied!');
    }

    return postRepository.remove(postId);
};

module.exports = {
    create,
    getPost,
    getPostById,
    getAllPosts,
    getUserPosts,
    getCurrentUserPosts,
    update,
    remove
}