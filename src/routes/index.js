const router = require('express').Router();
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');

router.use("/auth", authRouter);
router.use("/user", userRouter);

module.exports = router;