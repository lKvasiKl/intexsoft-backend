const postRepository = require('../repositories/postRepository');
const {createIdConnect, removeIdConnect} = require('../helpers/prisma');

const create = (currentUserId, body) => {
    return postRepository
        .create({
            author: createIdConnect(currentUserId),
            description: body.description
        })
        .catch();
};

const update = async (currentUserId, id, body) => {
    const foundedPost = await getPost({id});

    if (foundedPost?.authorId !== currentUserId) {
        throw new Error('Access denied!');
    }

    return postRepository
        .update(
            id, {
                authorId: currentUserId,
                description: body.description,
                createdAt: body.createdAt
            })
        .catch()
}

const remove = async (id, currentUserId) => {
    const foundedPost = await getPost({id});

    if (foundedPost?.authorId !== currentUserId) {
        throw new Error('Access denied!');
    }

    return postRepository.remove(id);
};

const getPost = async (filter) => {
    const foundedPost = await postRepository.findOne(filter);

    if (!foundedPost) {
        throw new Error('Post with such parameters is not found.')
    }

    return foundedPost;
};

const getPosts = async (filter, page) => {
    return ({
        count: await postRepository.count(filter),
        data: await postRepository.findMany(filter, page)
    });
};

const getPostsByUser = async (authorId, page) => {
    return ({
        count: await postRepository.count({authorId}),
        data: await postRepository.findMany({authorId}, page)
    });
};

const getAllCurrentUserPosts = (authorId) => {
    return postRepository.findAll({authorId});
};

const like = async (id, currentUserId) => {
    const foundedPost = await getPost({id});

    for (let user = 0; foundedPost.user.length; user++) {
        if (foundedPost.user[user].id === currentUserId) {
            return postRepository.update(
                id, {
                    user: removeIdConnect(currentUserId)
                }
            );
        }
    }

    return postRepository.update(
        id, {
            user: createIdConnect(currentUserId)
        }
    );
};

module.exports = {
    create,
    update,
    remove,
    getPost,
    getPosts,
    getPostsByUser,
    getAllCurrentUserPosts,
    like
}