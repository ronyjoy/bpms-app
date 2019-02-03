import keys from '../config/keys';
import mongoose from 'mongoose';
import User from '../models/user.model';
import Organization from '../models/organization.model';
import Customer from '../models/customer.model';
import Enquiry from  '../models/enquiry.model';

//Mongo db connection
module.exports = mongoose.connect(keys.mongoURI)
  .then(() => console.log('mongodb connection succesful'))
  .catch((err) => console.error(err));