const router = require('express').Router();
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');
const commentRouter = require('./commentRouter');
const checkAuth = require('../middlewares/checkAuth');

router.use("/auth", authRouter);
router.use("/user", checkAuth, userRouter);
router.use("/post", checkAuth, postRouter);
router.use("/comment", checkAuth, commentRouter);

module.exports = router;