const mongoose = require('mongoose')
const Customer = mongoose.model('customers');



module.exports = (app) => {

  //get all customers
  app.get('/api/customer', function (req, res) {
    Customer.find(function (err, customer) {
      if (err) {
        res.send(err);
      }

      res.json(customer);
    });
  });


  //Add a new customer
  app.post('/api/customer', function (req, res) {
    console.log(req.body);
    var customer = new Customer(req.body);
    console.log("Customer " + customer);
    customer.save(function (err) {
      if (err) {
        res.send(err);
      }
      console.log('customer saved');

      res.json(customer);
    });
  });

  app.put('/api/customer/:id', function (req, res) {
    console.log(req.params.id)
    Customer.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, user) {
      if (err) return res.status(500).send("There was a problem updating the user.");
      res.status(200).send(user);
    });
  });
};


