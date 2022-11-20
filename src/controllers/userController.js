const userService = require('../services/userService');
const {removePassword} = require("../helpers/user");


const getUser = (req, res) => {
    userService
        .getById(req.params.id)
        .then((user) => {
            res.send(removePassword(user));
        })
        .catch((e) => {
            res.status(404).send(e.message);
        });
};

const getCurrentUser = (req, res) => {
    userService
        .getById(req.query.userId)
        .then((currentUser) => {
            res.send(removePassword(currentUser));
        })
        .catch((e) => {
            res.status(404).send(e.message);
        });
};

const updateCurrentUser = async (req, res) => {
    userService
        .update(req.query.userId, req.body)
        .then((updatedUser) => {
            res.send(removePassword(updatedUser));
        })
        .catch((e) => {
            res.status(400).send(e.message);
        });
};

const deleteCurrentUser = async (req, res) => {
    userService
        .remove(req.query.userId)
        .then(() => res.status(204).send())
        .catch((e) => {
            res.status(400).send(e.message);
        });
}

module.exports = {
    getUser,
    getCurrentUser,
    updateCurrentUser,
    deleteCurrentUser
}