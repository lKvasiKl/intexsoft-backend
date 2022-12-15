const router = require('express').Router();
const {celebrate} = require('celebrate');
const postSchemas = require('../validation/postSchemas');

const {
    create,
    update,
    remove,
    getPost,
    like
} = require('../controllers/postController');

router.post("/create", celebrate(postSchemas.createPost), create);
router.post("/", getPost);
router.patch("/:id", update);
router.delete("/:id", remove);
router.put("/:id", like);

module.exports = router;