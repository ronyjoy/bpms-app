var bodyParser = require('body-parser')
const mongoose = require('mongoose')
//const Enquiry = mongoose.model('enquiry_model');
var Enquiry = require('../models/enquiry')

module.exports = (app) => {
  app.use(bodyParser.json());

  //Add a new customer
  app.post('/api/enquiry', (req, res) => {
    console.log(req.body);
    console.log("inside the post api call");
    //let enquiry = new Enquiry();
    //enquiry.enquiry_id = "1";

    //var enquiry = new Enquiry();
    //enquiry.

    //create user in the database
    const enquiryData = new Enquiry();
    enquiryData.enquiry_description = req.param("desc");

    enquiryData.save(function (err) {
      if (err) return handleError(err);
        console.log("Saved the data ");
    });
  });

  //get all customers
  app.get('/api/enquiry', function (req, res) {
    Enquiry.find(function (err, enquiry) {
      if (err) {
        res.send(err);
      }
      res.json(enquiry);
    });
  });

};


