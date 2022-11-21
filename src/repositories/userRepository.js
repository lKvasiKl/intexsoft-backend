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

const create = async (userData) => {
    const {email, hashPassword, firstName, lastName} = userData;
    return await prisma.user.create({
        data: {
            email: email,
            hashPassword: hashPassword,
            firstName: firstName,
            lastName: lastName
        }
    });
};

const update = async (id, userData) => {
    const {email, hashPassword, firstName, lastName} = userData;
    return await prisma.user.update({
        where: {
            id: id
        },
        data: {
            email: email,
            hashPassword: hashPassword,
            firstName: firstName,
            lastName: lastName
        }
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