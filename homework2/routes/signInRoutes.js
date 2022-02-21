const {Router} = require('express');
const signInRouter = Router();

const signInController = require('../controllers/signInController');
const signInMiddleware = require('../middleware/isUserValid');


signInRouter.get ('/', signInController.renderSignIn);
signInRouter.post ('/', signInMiddleware, signInController.signInUser);

module.exports = signInRouter;
