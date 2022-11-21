const prisma = require('../prisma/feed');

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
    getPostLikesCount,
    isLikedPost
}