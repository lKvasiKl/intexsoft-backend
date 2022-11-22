const prisma = require('../prisma/feed');

const addLike = async (data) => {
    return await prisma.usersLikedPosts.create({data});
};

const removeLike = async (currentUserId, postId) => {
    return await prisma.usersLikedPosts.deleteMany({
        where: {
            userId: +currentUserId,
            postId: +postId
        }
    });
};

const getPostLikesCount = async (postId) => {
    return await prisma.usersLikedPosts.count({
        where: {
            postId: +postId
        }
    });
};

const isLikedPost = async (userId, postId) => {
    return await prisma.usersLikedPosts.findFirst({
        where: {
            userId: +userId,
            postId: +postId
        }
    });
};

module.exports = {
    addLike,
    removeLike,
    getPostLikesCount,
    isLikedPost
}