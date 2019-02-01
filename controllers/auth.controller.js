import logger from "../core/logger/app.logger";

const controller = {};

controller.isUserWithOrg = async (req, res) => {
  try {
    
    let org = req.headers.host.split(".")[0];
    let user = req.user.email;
    logger.info(org);
    logger.info(user);
    return true;
  } catch (err) {
    logger.error("Error in getting organizations- " + err);
    res.send("Got error in getAll");
  }
};

export default controller;
