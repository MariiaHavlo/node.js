const users = require('../db/users');
const error = require('../db/error');

class LoginController {
    renderLogin(req, res) {
        res.render('login');
    };

    loginUsers({body}, res) {

        const emailCheck = users.some(user => user.email === body.email);

        if (emailCheck) {
            // error = 'Such email is already registered';
            res.redirect('/error');

            return;
        }

        users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
        res.redirect('/users');
    }

}

module.exports = new LoginController();
