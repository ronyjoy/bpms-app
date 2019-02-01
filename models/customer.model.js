import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  image: String,
  name: String,
  viewers: Number,
  customername:String,
  email:String,
  contactperson:String,
  phone:String,
  address:String,
  fax:String,
  rank:Number

});

let CustomerModel = mongoose.model("customers", customerSchema);

CustomerModel.getAll = () => {
  return CustomerModel.find({});
};

CustomerModel.add = org => {
  return org.save();
};

CustomerModel.update = (id, detailsToUpdate) => {
  return CustomerModel.findByIdAndUpdate(id, detailsToUpdate, { new: true });
};

export default CustomerModel;