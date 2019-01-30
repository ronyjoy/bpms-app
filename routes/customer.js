import express from "express";
import Customer from '../models/customer'
const router = express.Router();

//get all customers
router.get("/", function(req, res) {
  Customer.find(function(err, customer) {
    if (err) {
      res.send(err);
    }

    res.json(customer);
  });
});

//Add a new customer
router.post("/", function(req, res) {
  console.log(req.body);
  var customer = new Customer(req.body);
  console.log("Customer " + customer);
  customer.save(function(err) {
    if (err) {
      res.send(err);
    }
    console.log("customer saved");

    res.json(customer);
  });
});

router.put("/:id", function(req, res) {
  console.log(req.params.id);
  Customer.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(
    err,
    user
  ) {
    if (err)
      return res.status(500).send("There was a problem updating the user.");
    res.status(200).send(user);
  });
});

module.exports = router;
