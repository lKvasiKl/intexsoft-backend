const commentRepository = require('../repositories/commentRepository');
const postService = require('../services/postService');

const create = async (currentUserId, postId, body) => {
    await postService.getPostById(postId);

    return commentRepository
        .create({
            userId: currentUserId,
            postId: +postId,
            text: body.text,
            createdAt: new Date()
        })
        .catch();
};

const getPostComments = async (postId) => {
    await postService.getPostById(postId);

    return commentRepository
        .getPostComments(postId)
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
}

module.exports = {
    create,
    getPostComments,
    update,
    remove
}