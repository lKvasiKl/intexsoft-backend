const userService = require('../services/userService');

const getUser = async (req, res) => {
    const id = req.params.id;
    if(!id) {
        return res.status(404).json({
            message: `user with ${id} not found.`
        });
    }

    const user = await userService.getById(id);
    if(user){
        return res.json(user);
    }
};

module.exports = {
    getUser
}