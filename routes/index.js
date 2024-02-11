const authController = require('./Authorization/authController');
const authMiddleware = require('./Authorization/middleware');
const userController = require('./users/userControllers');
const userMidlleware = require('./users/middleware');
const blogController = require('./blogs/BlogController');

const express = require('express');
const router = express.Router();

router.route('/user/login').post([authMiddleware.validateUserPassword, authController.login]);
router.route('/user/create').post([userMidlleware.checkNecessaryFields, userController.createUser]);
router.route('/user/delete').post([authMiddleware.validateJwt, userController.deleteUser]);

router.route('/blogs').get(authMiddleware.validateJwt, blogController.getAllBlogs);
router.route('/blogs/create').post(authMiddleware.validateJwt, blogController.createBlog);
router.route('/blogs/:id').get(authMiddleware.validateJwt, blogController.getBlogById)
router.route('/blogs/update').put(authMiddleware.validateJwt, blogController.updateBlog);
router.route('/blogs/delete').delete(authMiddleware.validateJwt, blogController.deleteBlog);

module.exports = router;