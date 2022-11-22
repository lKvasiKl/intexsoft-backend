const likedPostRepository = require('../repositories/likedPostRepository');

const addLikeToPost = async (currenUserId, postId) => {
    await likedPostRepository.addLike({
        userId: +currenUserId,
        postId: +postId
    });

    const isLiked = await isLikedPost(currenUserId, postId);
    const likesAmount = await getPostLikes(postId);

    return {isLiked, likesAmount};
};

const removeLikeFromPost = async (currenUserId, postId) => {
    await likedPostRepository.removeLike(currenUserId, postId);

    const isLiked = await isLikedPost(currenUserId, postId);
    const likesAmount = await getPostLikes(postId);

    return {isLiked, likesAmount};
};

const getPostLikes = (postId) => {
    return likedPostRepository.getPostLikesCount(postId);
};

const isLikedPost = async (userId, postId) => {
    return !!await likedPostRepository.isLikedPost(userId, postId);
};

module.exports = {
    addLikeToPost,
    removeLikeFromPost,
    getPostLikes,
    isLikedPost
}