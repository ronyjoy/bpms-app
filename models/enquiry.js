var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var enquirySchema = new Schema({
  enquiry_id: String, 
  enquiry_date: String,
  enquiry_description: String,
  customer_id: String,
  customer_contact_id: String
});

var Enquiry = mongoose.model('enquiry', enquirySchema);

module.exports = Enquiry;
