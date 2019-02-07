import logger from "../core/logger/app.logger";
import Organization from '../models/organization.model';

const controller = {};

controller.isUserWithOrg = async (orgName, user) => {
  try {
   let org = await Organization.getByNameAndEmpEmail(orgName,user);
   if(org) {
     return true;
    } else {
      return false;
    }
    
  } catch (err) {
    logger.error("Error in getting organizations- " + err);
  }
};

export default controller;
