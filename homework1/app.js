// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user
// ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл
// виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
//
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)

const fs = require('fs');

const path = require('path')

fs.mkdir(path.join(__dirname,'main','online'),
    {recursive:true},(err)=>{
    if (err){
        console.log(err);
        throw err
    }
});
fs.mkdir(path.join(__dirname,'main','inPerson'),
    {recursive:true},(err)=>{
    if (err){
        console.log(err);
        throw err

    }
});

let onlineUsers = [
    { name: "Andrii", age: 22, city: "Lviv" },
    { name: "Ira", age: 25, city: "Odesa" },
    { name: "Lena", age: 20, city: "Lviv" }
];

let inPersonUsers = [
    { name: "Max", age: 26, city: "Kyiv" },
    { name: "Ira", age: 25, city: "Odesa" },
    { name: "Lena", age: 20, city: "Lviv" }
];

fs.writeFile(
    path.join(__dirname,'main','online','online.txt'), JSON.stringify(onlineUsers), (err)=>{
        if (err){
            console.log(err)
            throw err
        }
    })

for (let person of onlineUsers){

    for (let personKey in person){

        fs.appendFile(path.join(__dirname,'main','online','online.txt'),
            `${personKey.toUpperCase()}: ${person[personKey]}\n`,
            {flag:'a'},
            (err)=>{
                if (err){
                    console.log(err);
                    throw err;
                }
            })
    }
}

fs.writeFile(
    path.join(__dirname,'main','inPerson','person.txt'), JSON.stringify(inPersonUsers), (err)=>{
        if (err){
            console.log(err)
            throw err
        }
    })

for (let person of inPersonUsers){

    for (let personKey in person){

        fs.appendFile(path.join(__dirname,'main','inPerson','person.txt'),
            `${personKey.toUpperCase()}: ${person[personKey]}\n`,
            {flag : 'a'},
            (err)=>{
            if (err){
                console.log(err);
                throw err;
            }
            })
    }
}
// ................................................

const change =()=>{
    fs.readFile(path.join(__dirname,'main','inPerson','person.txt'), 'utf8',(err,data)=>{
        if (err){
            console.log(err);
            throw err;
        }
        console.log(data)

        fs.readFile(path.join(__dirname,'main','online','online.txt'),(err,data)=>{
            if (err){
                console.log(err);
                throw err;
            }
            fs.appendFile(path.join(__dirname,'main','inPerson','person.txt'),`${inPersonUsers}`,{flag:'w'},(err)=>{
                if (err){
                    console.log(err);
                    throw err;
                }
                fs.appendFile(path.join(__dirname,'main','online','online.txt'),`${onlineUsers}`,(err)=>{
                    if (err){
                        console.log(err);
                        throw err;
                    }
                })
            })

        })
    })
}

change();



