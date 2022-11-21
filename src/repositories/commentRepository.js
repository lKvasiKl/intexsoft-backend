const prisma = require('../prisma/feed');

const create = async (data) => {
    return await prisma.comment.create({data});
};

const getPostComments = async (postId) => {
    return await prisma.comment.findMany({
        where: {
            postId: +postId,
        }
    });
};

const getCommentById = async (id) => {
    return await prisma.comment.findUnique({
        where: {
            id: +id,
        }
    });
};

const update = async (id, data) => {
    return await prisma.comment.update({
        where: {
            id: +id,
        },
        data
    });
};

const remove = async (id) => {
    return await prisma.comment.delete({
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