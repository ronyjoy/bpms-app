var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var enquirySchema = new Schema({
  enquiry_id: String, 
  enquiry_date: String,
  enquiry_description: String,
  customer_id: String,
  customer_contact_id: String
});

module.exports = mongoose.model('enquiry', enquirySchema);
