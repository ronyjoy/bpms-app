import Organization from "../models/organization.model";
import logger from "../core/logger/app.logger";

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const organizations = await Organization.getAll();
    logger.info("sending all Organizations...");
    res.send(organizations);
  } catch (err) {
    logger.error("Error in getting organizations- " + err);
    res.send("Got error in getAll");
  }
};

controller.getByName = async (req, res) => {
  try {
    const orgName = req.params.name;
    const organization = await Organization.getByName(orgName);
    logger.info("sending Organization...");
    res.send(organization);
  } catch (err) {
    logger.error("Error in getting organization " + err);
    res.send("Got error in getOrgByName");
  }
};

controller.getByNameAndEmpEmail = async (req, res) => {
  logger.info("get Org by orgname and employee email");
  try {
    const orgName = req.params.org;
    const empEmail = req.params.email;
    const organizations = await Organization.getByNameAndEmpEmail(
      orgName,
      empEmail
    );
    res.send(organizations);
  } catch (err) {
    logger.error("Error in getting organizations- " + err);
    res.send("Got error in getAll");
  }
};

controller.add = async (req, res) => {
  try {
    let organization = new Organization({
      logo: req.body.logo,
      name: req.body.name,
      email: req.body.email,
      contactperson: req.body.contactperson,
      phone: req.body.phone,
      address: req.body.address,
      employees: req.body.employees
    });
    organization = await Organization.add(organization);
    logger.info("sending all Organizations...");
    res.send(organization);
  } catch (err) {
    logger.error("Error in getting organization " + err);
    res.send("Got error in add org");
  }
};

controller.update = async (req, res) => {
  try {
    let orgId = req.params.id;
    let orgDetailsToUpdate = req.body;
    const organizations = await Organization.update(
      orgId,
      orgDetailsToUpdate
    );
    res.send(organizations);
  } catch (err) {
    logger.error("Error in Updating organization " + err);
    res.send("Got error in UPDATE");
  }
};

export default controller;
