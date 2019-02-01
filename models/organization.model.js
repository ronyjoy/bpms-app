import mongoose from "mongoose";
var Schema = mongoose.Schema;

var employee = new Schema({
  name: String,
  email: String
});

var organizationSchema = new Schema({
  logo: String,
  name: String,
  email: String,
  contactperson: String,
  phone: String,
  address: String,
  employees: [employee]
});

let EmployeeModel = mongoose.model("employee", employee);
let OrganizationModel = mongoose.model("organizations", organizationSchema);

OrganizationModel.getAll = () => {
  return OrganizationModel.find({});
};

OrganizationModel.getByName = orgName => {
  return OrganizationModel.find({ name: orgName });
};

OrganizationModel.getByNameAndEmpEmail = (orgName, empEmail) => {
  return OrganizationModel.find({
    name: orgName,
    employees: { $elemMatch: { email: empEmail } }
  });
};

OrganizationModel.add = org => {
  return org.save();
};

OrganizationModel.update = (id, detailsToUpdate) => {
  return Organization.findByIdAndUpdate(id, detailsToUpdate, { new: true });
};

export default OrganizationModel;
