const router = require('express').Router();
const {celebrate} = require('celebrate');
const commentSchemas = require('../validation/commentSchemas');

const {
    create,
    update,
    remove,
    getPostComments
} = require('../controllers/commentController');

router.post("/:postId", celebrate(commentSchemas.createComment), create);
router.get("/:postId", getPostComments);
router.patch("/:id", update);
router.delete("/:id", remove);

module.exports = router;