const {PAGINATION_LIMIT} = require('../constants/prismaConstants');

const paginationToResponse = (total, page, limit = PAGINATION_LIMIT) => {
    const totalPage = Math.ceil(total / limit);

    if (totalPage < page) {
        throw new Error(`Page ${page} doesn't exist.`);
    }

    return {
        total: totalPage,
        currentPage: page,
        limit: limit
    };
};

module.exports = {
    paginationToResponse
}