import mongoose from 'mongoose';
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;


var customerSchema = new Schema({
  image: String,
  name: String,
  viewers: Number,
  customername: {type: String,index: true, unique: true},
  email: String,
  contactperson: String,
  phone: String,
  address: String,
  fax: String,
  rank: Number

});

let CustomerModel = mongoose.model("customers", customerSchema);
customerSchema.plugin(uniqueValidator);

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