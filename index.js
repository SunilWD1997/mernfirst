// // import of file_system module :-
// const fs = require("fs");

// // import of operating system module:-
// const os = require("os");

// // import of path system module:-
// const path = require("path");


// import of http module :-
// const http = require("http");


//  <-------------------Folder CRUD Operations------------------------------>

// To create folder asynchronusly:-
// fs.mkdir('Sunil', (err)=>{

//     console.log('folder is created successfully');
// });



// For folder rename asyncronously:-
// fs.rename('madhab', 'Litu', (err)=>{

//     console.log('rename is done successfully');
// });

// console.log('just left the house at any cost');



// To delete folder asynchronusly:-
// fs.rmdir('Sunil', (err)=>{

//     console.log('folder is deleted successfully');
// });



//  <-------------------File CRUD Operations ----------------------------------->

// To create file assynchronusly :-
// fs.writeFile('./litu/Litu.txt', 'Hello sunil', (err)=>{
//   console.log('file is created succesfully');
// });


// To add more text to the file assynchrousnously :-
// fs.appendFile('./litu/Litu.txt', ' Hello my name is sunil', (err)=>{
//   console.log('file is created succesfully');
// });


// To read the file content assynchrousnously :-
// fs.readFile('./litu/Litu.txt', 'utf-8', (err, data)=>{
//     console.log(data);
//   });


// To rename the file  assynchrousnously :-
// fs.rename('./litu/Litu.txt', './litu/Kitu.txt', (err)=>{
//     console.log('file renamed succsessfully');
//   });


// To delete the file  assynchrousnously :-
// fs.unlink('./litu/Kitu.txt',  (err)=>{
//     console.log('file deleted succsessfully');
//   });



// <-----------------------// All path module methods ------------------------------->
// console.log(__filename);
// console.log(__dirname);

// path.basename(__filename);
// path.extname(__filename);
// path.dirname(__filename);


// const obj = path.parse(__filename);

// console.log(obj.root);
// console.log(obj.base);
// console.log(obj.dir);
// console.log(obj.ext);
// console.log(obj.name);



// Basic server by HTTP modules:-

// const http = require('http');

// const server = http.createServer((req, res)=>{

//     res.end( `<h1>Hello Sir, please keep going.</h1>`);

// });


// server.listen('5000', '127.0.0.1', ()=>{

//     console.log('server listening on 5000')
// });


// To resolve request:-
// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {
//     if (req.url == '/') {
//         res.end('Hi, This is a home page');
//     } else if (req.url == '/about') {
//         res.end('Hi, This is a about page');
//     } else if (req.url == '/contact') {
//         res.end('Hi this is a contact page')
//     } else {
//         res.end('Hi, This is a home page');
//     }
// });


// server.listen(8000, '127.0.0.1', () => {
//     console.log('server listening on 8000');
// });



// const fs = require('fs');

// const url = require('url');

// const http = require('http');


// const server = http.createServer((req, res) => {


//     if (req.url == '/') {
//         fs.readFile('./web/index.html', 'utf-8', (err, data) => {
//             res.writeHead(200, { 'Content-type': 'text/html' })
//             res.end(data);
//         })
//     } else if (req.url == '/about') {

//         fs.readFile('./web/about.html', 'utf-8', (err, data) => {
//             res.writeHead(200, { 'Content-type': 'text/html' })
//             res.end(data);
//         })
//     } else if (req.url == '/service') {

//         fs.readFile('./web/service.html', 'utf-8', (err, data) => {
//             res.writeHead(200, { 'Content-type': 'text/html' })
//             res.end(data);
//         })
//     }else if(req.url == '/contact'){
//         fs.readFile('./web/contact.html', 'utf-8', (err, data) => {
//             res.writeHead(200, { 'Content-type': 'text/html' })
//             res.end(data);
//         });
//     }else{
//         fs.readFile('./web/index.html', 'utf-8', (err, data) => {
//             res.writeHead(200, { 'Content-type': 'text/html' })
//             res.end(data);
//         });
//     }

// });


// server.listen('8000','127.0.0.1' , () => {
//     console.log('server is running on 8000');
// });



// EXPRESS.JS PRACTICE :-

// const express = require('express');

// const app = express();



// app.get('/', (req, res)=>{

//     const stream = ReadableStream()
// })

// app.listen('8000', ()=>{
//     console.log('server running at 8000')
// })

const fs = require('fs');

const path = require('path');

const http = require('http');



const PORT = process.env.PORT || 8000;





const app = http.createServer((req, res) => {

    // res.writeHead(200, {'Content-Type': 'text/html'});

    let filePath = path.join(__dirname, 'web', req.url == '/' ? 'index.html' : req.url);


    let contentType = 'text/html';

    let ext = path.extname(filePath);

    if (!ext) {
        filePath += '.html';
    }

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break

        case '.js':
            contentType = 'text/javascript'
            break

        default:
            contentType = 'text/html'
    }




    fs.readFile(filePath, 'utf-8', (err, content) => {

        if (err) {
            fs.readFile(path.join(__dirname, 'web', 'error.html'), 'utf-8', (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Error');
                } else {
                    res.writeHead(404, { 'Content-Type': contentType });
                    res.end(data);
                }
            })

        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }

    });





});



app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
});