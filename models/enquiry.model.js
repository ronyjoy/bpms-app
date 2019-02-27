import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var enquirySchema = new Schema({
  id:String,
  enq_date: String,
  enq_time: String,
  exp_date: String,
  description: String,
  customer: String,
  contactPerson: String,
  contactEmail: String,
  contactPhone: String,
  priority: String
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

