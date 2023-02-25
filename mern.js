const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const async = require('hbs/lib/async');




main().catch(err => console.log(err))

async function main() {

    mongoose.set('strictQuery', true);

    await mongoose.connect('mongodb://127.0.0.1:27017/demo')
    console.log('Database connected');
}

const userSchema = new mongoose.Schema({
    user_name: String,
    user_email: String,
    mob_num: Number
})

const User = mongoose.model('User', userSchema);


const server = express();

server.use(cors());

server.use(bodyParser.json());

const PORT = process.env.PORT || 8000

server.post('/contact', async (req, res) => {

    let user = new User();
    user.user_name = req.body.user_name;
    user.user_email = req.body.user_email;
    user.mob_num = req.body.mob_num;
    const doc = await user.save();

    console.log(doc)
    res.json(doc)
});


server.get('/contact',  async(req, res) => {

 const docs = await User.find({});
 res.json(docs)
})


server.listen(PORT, () => {
    console.log(`server running at ${PORT}`)
});