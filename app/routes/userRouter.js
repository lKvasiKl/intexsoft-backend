const router = require('express').Router();
const {getUser} = require('../controllers/userController');

router.get("/:id", getUser);

module.exports = router;