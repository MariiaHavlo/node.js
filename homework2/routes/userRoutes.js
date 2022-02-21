const {Router} = require('express');
const userRouter = Router();

const userController = require('../controllers/userController');
const userMiddleware = require('../middleware/isUserDataValid');


userRouter.get('/', userController.renderUsers);

userRouter.post('/:userId', userMiddleware,  userController.getUsersById);

module.exports = userRouter;