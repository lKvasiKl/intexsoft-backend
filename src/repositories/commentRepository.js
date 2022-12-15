const prisma = require('../prisma/feed');

const create = (data) => {
    return prisma.comment.create({data});
};

const getPostComments = (postId) => {
    return prisma.comment.findMany({
        where: {
            postId: +postId,
        }
    });
};

const getCommentById = (id) => {
    return prisma.comment.findUnique({
        where: {
            id: +id,
        }
    });
};

const update = (id, data) => {
    return prisma.comment.update({
        where: {
            id: +id,
        },
        data
    });
};

const remove = (id) => {
    return prisma.comment.delete({
        where: {
            id: +id,
        }
    });
};

module.exports = {
    create,
    getPostComments,
    getCommentById,
    update,
    remove
}