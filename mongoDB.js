
const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const Users = require('./db/schema');

require('./db/conn');

const PORT = process.env.PORT || 8080

const server = express();

server.use(cors());

server.use(bodyParser.json());



server.get('/', (req, res) => {

    res.send('Your server is responding'); 
})


server.listen(PORT, () => {
    console.log(` server running at ${PORT}`)
});