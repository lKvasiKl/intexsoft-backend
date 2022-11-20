const router = require('express').Router();

const {
    getUser,
    getCurrentUser,
    updateCurrentUser,
    deleteCurrentUser
} = require('../controllers/userController');

router.get("/:id", getUser);
router.get("/", getCurrentUser);
router.patch("/", updateCurrentUser);
router.delete("/", deleteCurrentUser);

module.exports = router;