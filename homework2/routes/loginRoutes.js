const {Router} = require('express');
const loginRouter = Router();
const loginController = require('../controllers/loginController');
const loginMiddleware = require('../middleware/isUserValid');

loginRouter.post('/login', loginMiddleware, loginController.loginUsers);

loginRouter.get('/login',loginController.renderLogin);

module.exports = loginRouter;