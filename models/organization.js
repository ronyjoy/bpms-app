var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var organizationSchema = new Schema({
  logo: String,
  name: String,
  email:String,
  contactperson:String,
  phone:String,
  address:String,
});

module.exports = mongoose.model('organizations', organizationSchema);
