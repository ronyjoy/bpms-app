var bodyParser = require('body-parser')
const mongoose = require('mongoose')
//const Enquiry = mongoose.model('enquiry_model');
const Enquiry = require('../models/enquiry')

module.exports = (app) => {
  app.use(bodyParser.json());

  //Add a new customer
  app.post('/api/enquiry', (req, res) => {
    console.log(req.body);
    console.log("inside the post api call");
    let enquiry = new Enquiry();
    enquiry.enquiry_id = "1";

    //create user in the database
    const enquiryData = new Enquiry(enquiry);

    enquiryData.save(function (err) {
      if (err) return handleError(err);
        console.log("Saved the data ");
    });
  });

  //Add a new customer
  app.get('/api/enquiry', (req, res) => {
    console.log(res);
  });
};


