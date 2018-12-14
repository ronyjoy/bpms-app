const express = require('express');
const  PORT = process.env.PORT || 5000
const mongoose = require('mongoose');

const app = express();


//API Service
mongoose.connect('mongodb://localhost/ReactReduxExpressMongo')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
var CustomerApi = require('./api/CustomerApi.js');

var router = express.Router();
CustomerApi(app);
app.listen(PORT);

//create api route
app.use('/api', router); //api root
app.use('/api/customers', router); //api root

//root message
app.post('/', function(req, res) {
  res.json({ message: 'BPMS API Root!' });
});
app.get('/', function(req, res) {
  res.json({ message: 'BPMS API Root!' }
  );
});




module.exports = app;
