const router = require('express').Router();
const {celebrate} = require('celebrate');
const commentSchemas = require('../validation/commentSchemas');

const {
    createComment,
    getPostComments,
    update,
    removeComment
} = require('../controllers/commentController');

router.post("/:postId", celebrate(commentSchemas.createComment), createComment);
router.get("/:postId", getPostComments);
router.patch("/:id", update);
router.delete("/:id", removeComment);

module.exports = router;