const userRouter = require('./controllers/userRouter');
const middleware = require('./middleware');
const express = require('express');

const router = express.Router();

router.route('/login').post([middleware.validateUserPassword, middleware.validateJwt, userRouter.login]);

module.exports = router;