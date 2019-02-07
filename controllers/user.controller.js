import User from "../models/user.model";
import logger from "../core/logger/app.logger";

const controller = {};

controller.getByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    logger.info("trying to get the user by emai %s", email);
    const user = await getByEmail(email);
    logger.info("sending User...%o", user);
    res.send(organization);
  } catch (err) {
    logger.error("Error in getting user " + err);
    res.send("Got error in getByEmail");
  }
};

controller.getByEmail = async email => {
  return User.findByEmail(email);
};

controller.getById = async id => {
  return User.findById(id);
};

controller.add = async (user) => {
  try {
    user = await User.add(user);
    logger.info("adding user %o", user);
    return user;
  } catch (err) {
    logger.error("Error adding user " + err);
  }
};

export default controller;
