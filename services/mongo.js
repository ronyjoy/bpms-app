const keys = require('../config/keys');
const mongoose = require('mongoose');
require('../models/user.model')
require('../models/organization.model')
require('../models/customer.model')
require('../models/enquiry.model')

//Mongo db connection
module.exports = mongoose.connect(keys.mongoURI)
  .then(() => console.log('mongodb connection succesful'))
  .catch((err) => console.error(err));