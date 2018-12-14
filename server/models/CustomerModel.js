var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  image: String,
  name: String,
  viewers: Number,
  name:String,
  email:String,
  contactPerson:String,
  phone:String,
  address:String,
  fax:String,
  rank:Number
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
