const likedPostRepository = require('../repositories/likedPostRepository');

const getPostLikes = (postId) => {
    return likedPostRepository.getPostLikesCount(postId);
}

const isLikedPost = async (userId, postId) => {
    return !!await likedPostRepository.isLikedPost(userId, postId);
}

module.exports = {
    getPostLikes,
    isLikedPost
}