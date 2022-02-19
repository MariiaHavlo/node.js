// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName, email(унікальне поле), password, age, city

// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект робити на сторінку
// з усіма юзерами /users і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж

// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city
// 3. /user/:id сторінка з інфою про одного юзера
//
// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект
const path = require('path')
const express = require('express');
const {engine} = require('express-handlebars');

const users = [];
let error = '';

const app = express();
// ..........get json.........
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// .......................................................................................

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

// ...................../login.show page login.hbs................................................
app.get('/login', (req, res) => {
    res.render('login')
})

// ..............get json info from inputs./login............
app.post('/login', ({body}, res) => {

    const emailCheck = users.some(user => user.email === body.email)

    if (emailCheck) {
        error = 'Such email is already registered';
        res.redirect('/error');

        return;
    }
    console.log(body);
    users.push({...body, id: users.length ? users[users.length-1].id +1 :1});
    res.redirect('/users');
})

app.get('/users', ({query}, res) => {
    // .........якщо ключі з квері є....
    if (Object.keys(query).length) {
        let usersArray = [...users];
        if (query.city) {
          usersArray =  usersArray.filter(user => user.city === query.city)
        }
        if (query.age) {
          usersArray =  usersArray.filter(user => user.age === query.age)
        }

        res.render('users',{users:usersArray})
        return;
    }

    res.render('users', {users})
})

app.get('/users/:userId', ({params}, res) => {
    // ..........users[]..find user with userId......
   const user = users.find(user => user.id === +params.userId);
   if (!user){
       error = 'User with id:{params.userId} is already registered';
       res.redirect('/error');
       return
   }

    res.render('userInfo', {user})
})

app.get('/error', (req, res) => {
    res.render('error', {error})
})

// ...........notFoudPage.....
app.use((req,res)=>{
    res.render('notFound')
})

app.listen(5200, () => {
    console.log('Server has started on port 5200')
})

