const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const async = require('hbs/lib/async');


async function main(){
    mongoose.set('strictQuery', true);

    await mongoose.connect('mongodb://127.0.0.1:27017/mern2');
    console.log('coonection success')
}

main().catch(err=> console.log(err));


const userSchema = mongoose.Schema({
    name: String,         
    email: String,
    message: String
});

const Users = mongoose.model('users', userSchema);




const PORT = process.env.PORT || 8000


const server = express();



server.use(cors());


server.use(bodyParser.json());


server.post('/contact', (req, res) => {

    const users = new Users()
     
    users.name = req.body.name
    users.email = req.body.email
    users.message = req.body.message
    users.save();

    res.send('hello');
   
});

server.get('/users', async(req, res) => {

    const docs = await Users.find();
    res.json(docs);

});

server.delete('/:id', async(req, res) => {

    res.send('deleted');

});




server.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
})