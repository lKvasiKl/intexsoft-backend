const prisma = require('../prisma/feed');
const {paginationFromPage} = require('../helpers/prisma');

const create = (data) => {
    return prisma.post.create({data});
};

const update = (id, data) => {
    return prisma.post.update({
        where: {
            id: +id
        },
        data
    });
};

const remove = (id) => {
    return prisma.post.delete({
        where: {
            id: +id
        }
    });
};

const findOne = (filter) => {
    return prisma.post.findUnique({
        where: {
            ...filter
        },
        include: {
            author: {
                select: {
                    avatar: true,
                    firstName: true
                }
            },
            user: {
                select: {
                    id: true
                }
            }
        }
    });
};

const findMany = (filter, page) => {
    return prisma.post.findMany({
        where: {
            ...filter
        },
        include: {
            author: {
                select: {
                    avatar: true,
                    firstName: true
                }
            },
            user: {
                select: {
                    id: true
                }
            }
        },
        ...paginationFromPage(page)
    })
};

const findAll = (filter) => {
    return prisma.post.findMany({
        where: {
            ...filter
        }
    });
};

const count = (filter) => {
    return prisma.post.count({
        where: {...filter}
    });
};


module.exports = {
    create,
    update,
    remove,
    findOne,
    findMany,
    findAll,
    count
}