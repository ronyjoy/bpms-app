var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  image: String,
  name: String,
  viewers: Number,
  customername: {
    type: String,
    unique: true
  },
  email:String,
  contactperson:String,
  phone:String,
  address:String,
  fax:String,
  rank:Number

});

module.exports = mongoose.model('customers', customerSchema);
