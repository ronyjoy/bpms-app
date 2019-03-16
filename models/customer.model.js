import mongoose from 'mongoose';
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;


var customerSchema = new Schema({
  image: String,
  name: {type: String, unique: true},
  email: String,
  contactperson: String,
  phone: String,
  address: String,
  fax: String,
  rank: String,
  approved: Boolean
});

let CustomerModel = mongoose.model("customers", customerSchema);
customerSchema.plugin(uniqueValidator);

CustomerModel.getAll = () => {
  return CustomerModel.find({});
};

CustomerModel.add = customer => {
  return customer.save();
};

CustomerModel.update = (id, detailsToUpdate) => {
  return CustomerModel.findByIdAndUpdate(id, detailsToUpdate, { new: true });
};

export default CustomerModel;