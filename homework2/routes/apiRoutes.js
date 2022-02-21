const { Router } = require('express');
const routes = Router();

const userRouter = require('./userRoutes');
routes.use('/users',userRouter);

const loginRouter = require('./loginRoutes');
routes.use('/login',loginRouter);

const signInRouter = require('./signInRoutes');
routes.use('/signIn',signInRouter);

module.exports = routes;