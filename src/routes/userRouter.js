const router = require('express').Router();
const authMiddleware = require('../middlewares/checkAuth');
const {
    getUser,
    getCurrentUser,
    updateCurrentUser,
    deleteCurrentUser
} = require('../controllers/userController');

router.get(
    "/:id",
    getUser
);

router.get(
    "/",
    authMiddleware,
    getCurrentUser
);

router.patch(
    "/",
    authMiddleware,
    updateCurrentUser
);

router.delete(
    "/",
    authMiddleware,
    deleteCurrentUser
);


module.exports = router;