const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const employee = new mongoose.model('employee', empSchema);

module.exports = employee;