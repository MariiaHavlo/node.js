const {Router} = require('express');
const userRouter = Router();
const userController = require('../controllers/userController');


userRouter.get('/users', userController.renderUsers);

userRouter.get('/:userId', userController.getUsersById);

module.exports = userRouter;