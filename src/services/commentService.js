const commentRepository = require('../repositories/commentRepository');

const create = (currentUserId, postId, body) => {
    return commentRepository
        .create({
            userId: currentUserId,
            postId: postId,
            text: body.text
        })
        .catch();
};

const update = async (currentUserId, commentId, body) => {
    const foundedComment = await commentRepository.getCommentById(commentId);

    if (foundedComment?.userId !== currentUserId) {
        throw new Error('Access denied!');
    }

    return commentRepository
        .update(
            commentId, {
                userId: currentUserId,
                text: body.text,
                createdAt: body.createdAt
            })
        .catch();
};

const remove = async (commentId, currentUserId) => {
    const foundedComment = await commentRepository.getCommentById(commentId);

    if (foundedComment?.userId !== currentUserId) {
        throw new Error('Access denied!');
    }

    return commentRepository.remove(commentId);
};

const getPostComments = async (postId) => {

    return commentRepository
        .getPostComments(postId)
        .catch();
};

module.exports = {
    create,
    update,
    remove,
    getPostComments
}