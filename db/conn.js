
const mongoose = require('mongoose');



// const async = require('hbs/lib/async');

const DB = 'mongodb+srv://npatra412:litu1234@cluster0.6ufz0ls.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false);

mongoose.connect(DB,{
        useNewUrlParser: true,
        UseUnifiedTopology: true
    }).then(() => console.log('connection succsessful')).catch((err) => console.log(err));




// async function mongoDB() {

//     mongoose.set('strictQuery', false);

//     await mongoose.connect(DB, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         UseUnifiedTopology: true,
//         useFindAndModify: false
//     });

//     console.log('connection success');
// }

// mongoDB().catch(err => console.log('no connection'));