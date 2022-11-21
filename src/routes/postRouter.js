const router = require('express').Router();
const {celebrate} = require('celebrate');
const postSchemas = require('../validation/postSchemas');

const {
    createPost,
    getPost,
    getAllPosts,
    getUserPosts,
    getCurrentUserPosts,
    update,
    deletePost
} = require('../controllers/postController');

router.post("/create", celebrate(postSchemas.createPost), createPost);
router.get("/all", getAllPosts);
router.get("/:id", getPost);
router.get("/user/:id", getUserPosts);
router.get("/", getCurrentUserPosts);
router.patch("/:id", update)
router.delete("/:id", deletePost)

module.exports = router;