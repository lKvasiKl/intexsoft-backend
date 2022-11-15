const userService = require('../services/userService');
const {removePassword} = require("../helpers/user");

const getUser = (req, res) => {
    const id = req.params.id;
    userService
        .getById(id)
        .then((user) => {
            if (!user) {
                res.status(404).json({
                    message: `User with id ${id} not found.`
                });
            }

            res.json(removePassword(user));
        })
        .catch((e) => {
            res.send(e);
        });
};

const getCurrentUser = (req, res) => {
    const id = req.userId;
    userService
        .getById(id)
        .then((currentUser) => {
            res.send(removePassword(currentUser));
        })
        .catch((e) => {
            res.send(e);
        });
};

const updateCurrentUser = async (req, res) => {
    const id = req.userId;
    userService
        .update(id, req.body)
        .then((updatedUser) => {
            res.send(removePassword(updatedUser));
        })
        .catch((e) => {
            res.send(e);
        });
};

const deleteCurrentUser = async (req, res) => {
    const id = req.userId;
    userService
        .remove(id)
        .then(() => res.status(204).send())
        .catch((e) => {
            res.send(e);
        });
}

module.exports = {
    getUser,
    getCurrentUser,
    updateCurrentUser,
    deleteCurrentUser
}