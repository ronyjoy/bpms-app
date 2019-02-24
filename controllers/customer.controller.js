import Customer from "../models/customer.model";
import logger from "../core/logger/app.logger";

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const customers = await Customer.getAll();
    logger.info("sending all customers...");
    res.send(customers);
  } catch (err) {
    logger.error("Error in getting customers- " + err);
    res.send("Got error in getAll");
  }
};

controller.add = async (req, res) => {
  try {
    let customer = new Customer(req.body);
    customer = await Customer.add(customer);
    logger.info("adding Customer...");
    res.send(customer);
  } catch (err) {
    logger.error("Error adding customer" + err);
    res.status(500).send({"error":{"message":"Duplicate Customer Name"}});
  }
};

controller.update = async (req, res) => {
    try {
      let customerId = req.params.id;
      let customerDetailsToUpdate = req.body;
      logger.info("updating customer with " + customerId +" customer details "+customerDetailsToUpdate);
      const customer = await Customer.update(
        customerId,
        customerDetailsToUpdate
      );
      res.send(customer);
    } catch (err) {
      logger.error("Error in Updating customer " + err);
      res.send("Got error in UPDATE");
    }
  };
  

export default controller;
