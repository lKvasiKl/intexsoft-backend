const router = require('express').Router();
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const checkAuth = require('../middlewares/checkAuth');

router.use("/auth", authRouter);
router.use("/user", checkAuth, userRouter);

module.exports = router;