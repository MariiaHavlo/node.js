const {Router} = require('express');
const loginRouter = Router();

const loginController = require('../controllers/loginController');
const loginMiddleware = require('../middleware/isUserValid');

loginRouter.post('/', loginMiddleware, loginController.loginUsers);

loginRouter.get('/',loginController.renderLogin);

module.exports = loginRouter;