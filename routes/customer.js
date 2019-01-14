const mongoose = require('mongoose')
const Customer = mongoose.model('customer');



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
    customer.save(function (err) {
      if (err) {
        res.send(err);
      }
      console.log('customer saved'); 

      res.json({ message: 'customer saved!' });
    });
  });
};


