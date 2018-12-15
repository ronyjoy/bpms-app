var Customer = require('../models/customer');



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
    var customer = new Customer();
    customer.name = req.param('name');
    customer.email = req.param('email');
    customer.contactPerson = req.param('contactPerson');
    customer.phone = req.param('phone');
    customer.address = req.param('address');
    customer.fax = req.param('fax');
    customer.rank = req.param('0');

    customer.save(function (err) {
      if (err) {
        res.send(err);
      }

      res.json({ message: 'customer saved!' });
    });
  });
};


