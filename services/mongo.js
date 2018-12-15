const keys = require('../config/keys');
const mongoose = require('mongoose');
const users = require('../models/user')

//Mongo db connection
mongoose.connect(keys.mongoURI)
  .then(() => console.log('mongodb connection succesful'))
  .catch((err) => console.error(err));