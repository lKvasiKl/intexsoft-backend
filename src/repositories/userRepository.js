const prisma = require('../prisma/feed');

const getByEmail = (email) => {
    return prisma.user.findUnique({
        where: {
            email: email
        }
    });
};

const getById = (id) => {
    return prisma.user.findUnique({
        where: {
            id: +id
        }
    });
};

const create = (data) => {
    return prisma.user.create({data});
};

const update = (id, data) => {
    return prisma.user.update({
        where: {
            id: id
        },
        data
    });
};

const remove = (id) => {
    return prisma.user.delete({
        where: {
            id: id
        }
    });
};

module.exports = {
    getByEmail,
    getById,
    create,
    update,
    remove
}