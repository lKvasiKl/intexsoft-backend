const prisma = require('../prisma/feed');

const create = async (data) => {
    return await prisma.post.create({data});
};

const getById = async (postId) => {
    return await prisma.post.findUnique({
        where: {
            id: +postId
        },
        include: {
            user: {
                select: {
                    avatar: true
                }
            },
            image: true
        }
    });
};

const getAll = async () => {
    return await prisma.post.findMany({
        include: {
            user: {
                select: {
                    avatar: true
                }
            },
            image: true
        }
    });
};

const getUserPosts = async (userId) => {
    return await prisma.post.findMany({
        where: {
            userId: +userId
        },
        include: {
            user: {
                select: {
                    avatar: true
                }
            },
            image: true
        }
    });
};

const update = async (id, data) => {
    return await prisma.post.update({
        where: {
            id: +id
        },
        data
    });
};

const remove = async (id) => {
    return await prisma.post.delete({
        where: {
            id: +id
        }
    });
};


module.exports = {
    create,
    getById,
    getAll,
    getUserPosts,
    update,
    remove
}