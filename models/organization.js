var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employee = new Schema({
  name: String,
  email:String,
});
var organizationSchema = new Schema({
  logo: String,
  name: String,
  email:String,
  contactperson:String,
  phone:String,
  address:String,
  employees:[employee]
});

module.exports = mongoose.model('organizations', organizationSchema);
module.exports = mongoose.model('employee', employee);
