const router = require('express').Router();

const {
    getPosts,
    getUserPosts,
    getCurrentUserPosts,
    getAllCurrentUserPosts
} = require("../controllers/postsController");


router.post("/all", getPosts);
router.post("/user/:id", getUserPosts);
router.post("/", getCurrentUserPosts);
router.get("/", getAllCurrentUserPosts);

module.exports = router;