const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    age: Number
});


const Users = mongoose.model('Users', userSchema);


module.exports = Users;



