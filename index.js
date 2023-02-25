const express = require('express');

const cors = require('cors');

require('./database/config');

const employee = require('./model/emp');
const async = require('hbs/lib/async');

const PORT = process.env.PORT || 8080

const server = express();


server.use(cors());

server.use(express.json());


server.post('/emp', (req, res) => {

    const emplData = new employee(req.body);
    console.log(emplData);
    res.json(req.body);
    emplData.save();
});

server.get('/emp', async(req, res) => {

    const data = await employee.find();
                 await res.json(data);

});


server.get('/emp/:id', async(req, res) => {
   
    const id = req.params.id
  const data = await employee.findById(id);

  res.json(data);

});



server.listen(PORT, () => {
    console.log(`server listenning at port no ${PORT}`);
});
