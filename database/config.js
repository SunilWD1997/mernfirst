const async = require('hbs/lib/async');
const mongoose = require('mongoose');

// async function main(){
//     mongoose.set('strictQuery', true);

//     await mongoose.connect('mongodb://127.0.0.1:27017/employee');
//     console.log('coonection success')
// }

// main().catch(err=> console.log(err));


mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://sunil:XCZPzsrkx9L97hwn@cluster0.oo4osfr.mongodb.net/?retryWrites=true&w=majority')
           .then(()=> console.log('mongoDB connected'))
           .catch((err)=>{ console.log(err)});







// async function main() {
//     mongoose.set('strictQuery', true);
//     mongoose.connect('mongodb://127.0.0.1:27017/myStore ');
//     console.log('connection succsess');
// }



// main().catch((err) => console.log(err));