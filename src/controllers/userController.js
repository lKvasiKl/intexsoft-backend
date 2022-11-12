const userService = require('../services/userService');
const {removePassword} = require("../helpers/user");

const getUser = async (req, res) => {
    const id = req.params.id;
    const user = await userService.getById(id);
    if (!user) {
        return res.status(404).json({
            message: `User with id ${id} not found.`
        });
    }

    return res.json(removePassword(user));
};

const getCurrentUser = async (req, res) => {
    const id = req.userId;
    const currentUser = await userService.getById(id);

    return res.json(removePassword(currentUser));
};

const updateCurrentUser = async (req, res) => {
    const id = req.userId;
    const updatedUser = await userService.update(id, req.body);

    return res.json(removePassword(updatedUser));
};

const deleteCurrentUser = async (req, res) => {
    const id = req.userId;
    return await userService
        .remove(id)
        .then(() => res.status(204).send());
}

module.exports = {
    getUser,
    getCurrentUser,
    updateCurrentUser,
    deleteCurrentUser
}