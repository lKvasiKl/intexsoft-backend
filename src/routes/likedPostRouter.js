const router = require('express').Router();

const {
    addLike,
    removeLike
} = require('../controllers/likedPostController');

router.post("/:postId", addLike);
router.delete("/:postId", removeLike);

module.exports = router;

