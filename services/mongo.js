const keys = require('../config/keys');
const mongoose = require('mongoose');
const users = require('../models/user')
const customer = require('../models/customer')
//const enquiry_model = require('../models/enquiry')

//Mongo db connection
mongoose.connect(keys.mongoURI)
  .then(() => console.log('mongodb connection succesful'))
  .catch((err) => console.error(err));