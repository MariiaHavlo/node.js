//
// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в
// інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так

const fs = require('fs')
const path = require('path')

fs.writeFile(path.join(__dirname, 'test.txt'),'some data',(err)=>{
    if (err){
        console.log(err);
        throw err
    }
})
fs.readFile(path.join(__dirname,'test.txt'),'utf8',(err,data)=>{
    if (err){
        console.log(err)
            throw err
    }
    console.log(data)
    fs.writeFile(path.join(__dirname,'test2.txt'),`${data}`,(err)=>{
        if (err){
            console.log(err)
            throw err
        }
    })

})
//
// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після
// того як все завершиться. Також вийде callback hell

fs.writeFile(path.join(__dirname,'task2.txt'),'info about task',(err)=>{
    if (err){
        console.log(err)
        throw err
    }
})

fs.readFile(path.join(__dirname,'task2.txt'),'utf8',(err,data)=>{
    if (err){
        console.log(err)
        throw err
    }
    console.log(data)

    fs.mkdir(path.join(__dirname,'tasks'),(err)=>{
        if (err){
            console.log(err)
            throw err
        }

        fs.wriiteFile(path.join(__dirname,'taskMain.txt'),`${data}`,(err)=>{
            if (err){
                console.log(err)
                throw err

            }
        })
    })

})
//
// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new

