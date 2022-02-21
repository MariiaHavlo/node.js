const users = require('../db/users');

class SignInController {
    renderSignIn(req, res) {
        res.render('signIn');
    };

    signInUser({body}, res) {

        try {
            const user = users.find(user => user.email === body.email && user.password === body.password);

            if (!user) {

                throw new Error('Wrong email or password');

            }

            res.redirect(`/users/${user.id}`);

        }catch ({message}){

            res.redirect(`/error?error${message}`);

        }


    }
}

module.exports = new SignInController();