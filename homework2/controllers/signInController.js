const users = require('../db/users');

class SignInController {
    renderSignIn(req, res) {
        res.render('signIn');
    };

    signInUser({body}, res) {
        const user = users.find(user => user.email === body.email && user.password === body.password);

        if (!user) {

            // error = 'Wrong email or password';
            res.redirect('/error');

            return;
        }

        res.redirect(`/users/${user.id}`);

    }
}

module.exports = new SignInController();