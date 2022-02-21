const {Router} = require('express');
const signInRouter = Router();

const signInController = require('../controllers/signInController');
const signInMiddleware = require('../middleware/isUserValid');


signInRouter.get ('/signIn', signInController.renderSignIn);
signInRouter.post ('/signIn', signInMiddleware, signInController.signInUser);

module.exports = signInRouter;
