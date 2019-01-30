const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
var Enquiry = require("../models/enquiry");


//Add a new customer
router.post("/", (req, res) => {
  console.log(req.body);
  console.log("inside the post api call");
  const enquiryData = new Enquiry();
  enquiryData.enquiry_description = req.param("desc");

  enquiryData.save(function(err) {
    if (err) return handleError(err);
    console.log("Saved the data ");
  });
});

//get all customers
router.get("/", function(req, res) {
  Enquiry.find(function(err, enquiry) {
    if (err) {
      res.send(err);
    }
    res.json(enquiry);
  });
});

module.exports = router;