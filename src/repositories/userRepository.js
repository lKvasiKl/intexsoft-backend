const prisma = require('../prisma/feed');

const getByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: {
            email: email
        }
    });
};

const getById = async (id) => {
    return await prisma.user.findUnique({
        where: {
            id: +id
        }
    });
};

const create = async (data) => {
    return await prisma.user.create({data});
};

const update = async (id, data) => {
    return await prisma.user.update({
        where: {
            id: id
        },
        data
    });
};

const remove = async (id) => {
    return await prisma.user.delete({
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