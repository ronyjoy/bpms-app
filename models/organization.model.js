import mongoose from "mongoose";
import logger from "../core/logger/app.logger";
const {Schema} = mongoose;

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
  return OrganizationModel.findOne({ name: orgName });
};

OrganizationModel.getByNameAndEmpEmail = async (orgName, empEmail) => {
  let org = await OrganizationModel.findOne({
    name: orgName,
    employees: { $elemMatch: { email: empEmail } }
  });
  logger.info('getBy org name: %s and Employee Email:%s, org returned : %o' , orgName,empEmail,org);
  return org;
};

OrganizationModel.add = org => {
  return org.save();
};

OrganizationModel.update = (id, detailsToUpdate) => {
  return Organization.findByIdAndUpdate(id, detailsToUpdate, { new: true });
};

export default OrganizationModel;
