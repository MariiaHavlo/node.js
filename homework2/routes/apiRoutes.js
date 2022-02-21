const users = require('../db/users');

const { Router } = require('express');
const routes = Router();

const userRouter = require('./userRoutes');
routes.use('/users',userRouter);

const loginRouter = require('./loginRoutes');
routes.use('/login',loginRouter);

const signInRouter = require('./signInRoutes');
routes.use('/signIn',signInRouter);

routes.use((req,res) => {
    res.render('notFound');
});

routes.get('/error', ({query}, res) => {
    res.render('error',{error:query.error});
});

module.exports = routes;