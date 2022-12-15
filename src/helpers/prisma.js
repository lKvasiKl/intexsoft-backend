const {PAGINATION_LIMIT} = require('../constants/prismaConstants');

const createIdConnect = (id) => ({
    connect: {id}
});

const removeIdConnect = (id) => ({
    disconnect: {id}
});

const paginationFromPage = (page = 1, limit = PAGINATION_LIMIT) => {
    return {
        skip: (page - 1) * limit,
        take: limit
    };
};

module.exports = {
    createIdConnect,
    removeIdConnect,
    paginationFromPage
}