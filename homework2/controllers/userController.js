const users = require('../db/users');

class UserController {

    renderUsers({query}, res) {

        if (Object.keys(query).length) {

            let usersArray = [...users];

            if (query.city) {
                usersArray = usersArray.filter(user => user.city === query.city);
            }

            if (query.age) {
                usersArray = usersArray.filter(user => user.age === query.age);
            }

            res.render('users', {users: usersArray});
            return;
        }

        res.render('users', {users});
    }

    getUsersById ({params}, res) {
        // ..........users[]..find user with userId......

        const user = users.find(user => user.id === +params.userId);

        if (!user) throw new Error('User with id:{params.userId} is already registered');


        res.render('userInfo', {user});
    }
}

module.exports = new UserController();