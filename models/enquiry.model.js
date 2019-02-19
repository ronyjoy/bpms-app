import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var enquirySchema = new Schema({
  enquiry_id: String, 
  enquiry_date: String,
  enquiry_description: String,
  customer_id: String,
  customer_contact_id: String
});

let EnquiryModel = mongoose.model('enquiry', enquirySchema);

EnquiryModel.getAll = () => {
    return EnquiryModel.find({});
}

EnquiryModel.addEnquiry = (enquiry) => {
    return enquiry.save();
}

EnquiryModel.update = (id, detailsToUpdate) => {
  return EnquiryModel.findByIdAndUpdate(id, detailsToUpdate, { new: true });
};

export default EnquiryModel;

