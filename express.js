// Tutorial 1 & 2 :------------------------------------------------------>
// express.js basics:-

// const express = require('express');

// const app = express();

// const PORT = process.env.PORT || 3000;


// // API:-

// // get - read

// // post - write

// // put - update

// // delete - delete

// // app.get(route, callback);




// app.get("/", (req, res)=>{

//     // res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.send('welcom to express.js');


// });



// app.get(`/about`, (req, res)=>{

//     // res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.send(`Hello this is the about page.`);

// });

// app.get("/contact", (req, res)=>{

//     // res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.send('Hello this is the contact page.');

// });



// app.listen(PORT, '127.0.0.1', ()=>{
//     console.log(`server running at ${PORT}`);
// });




// Tutorial 4 :------------------------------------------------------------------------------>
// Serving HTML & json:-

// const express = require('express');

// const app = express();

// const PORT = process.env.PORT || 3000;


// app.get('/', (req, res) => {

//     res.write('Hello Babu rao');
//     res.send();
// });

// app.get('/api', (req, res) => {

//     res.json(
//         [{ id: 1, name: 'sunil' },
//         { id: 1, name: 'sunil' }]

//     );

// });




// app.listen(PORT, '127.0.0.1', () => {
//     console.log(`server running at ${PORT}`);
// })



// Tutorial 5 :------------------------------------------------------------------------------>
//Serving static website:-

// const express = require('express');

// const app = express();

// const path = require('path');

// const PORT = process.env.PORT || 3000;

// let staticPath = path.join(__dirname, './web');

// app.use(express.static(staticPath));


// app.listen(PORT, '127.0.0.1', ()=>{

//     console.log(`server running at ${PORT}`);
// });



// Tutorial 6 :------------------------------------------------------------------------------>
// Serving dynamic website by the help of template engine:-

const express = require('express');

const app = express();

const path = require('path');

const hbs = require('hbs');

const PORT = process.env.PORT || 3000;

const staticPath = path.join(__dirname, './public');

const templatepath = path.join(__dirname, '/templatepath/views')

const partialpath = path.join(__dirname, '/templatepath/partials')
console.log(partialpath)
// To set the view engine
app.set('view engine', 'hbs');

app.set('views', templatepath);

hbs.registerPartials(partialpath);

app.use(express.static(staticPath));

// Template engine route:-

app.get('/', (req, res)=>{

    res.render('index');
});

app.get('/about', (req, res)=>{

    res.render('about');
});

app.get('/contact', (req, res)=>{

    res.render('contact');
});

app.get('/service', (req, res)=>{

    res.render('service');
});



app.get('/', (req, res)=>{
 res.write('hello express.js');
 res.send();
});


app.listen(PORT, '127.0.0.1', ()=>{
    console.log(`server running at ${PORT}`);
});


// let name_1 = 'Sunil';
// let name_2 = 'Litu';
// let name_3 = 'Gudu';
// let name_4 = 'Subha';

// const arr = [name_1, name_2, name_3, name_4];

// const indArr = Math.floor(Math.random()*4);

// console.log(arr[indArr]);