const keys = require('../config/keys');
const mongoose = require('mongoose');
require('../models/user')
require('../models/organization')
require('../models/customer')
require('../models/enquiry')

//Mongo db connection
module.exports = mongoose.connect(keys.mongoURI)
  .then(() => console.log('mongodb connection succesful'))
  .catch((err) => console.error(err));