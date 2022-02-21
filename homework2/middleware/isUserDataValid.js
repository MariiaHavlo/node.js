function isUserDataValid(req, res, next) {
    const {body} = req;

    try {

        if (body.firstName.length < 3 && body.lastName.length < 3) {

            throw new Error('LastName and FirstName must be min 3 symbols');

        }

        if (!body.email.includes('@')) {

            throw new Error('Email is not valid');

        }

        if (body.password.length < 6 ) {

            throw new Error('Password must be min 6 symbols');

        }

        if (body.age < 16 ) {

            throw new Error('Age is not valid. Min 16.');

        }

        if (!body.city ) {

            throw new Error('City is not valid');

        }

        next();

    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = isUserDataValid;