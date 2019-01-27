const mongoose = require("mongoose");
const Organization = mongoose.model("organizations");

module.exports = app => {
  //get all organizations
  app.get("/api/organizations", function(req, res) {
    Organization.find(function(err, organizations) {
      if (err) {
        res.send(err);
      }

      res.json(organizations);
    });
  });
  //get  organizations by name
  app.get("/api/organizations/:name", function(req, res) {
    Organization.findOne({ name: req.params.name }, function(
      err,
      organizations
    ) {
      if (err) {
        res.send(err);
      }
      if (organizations) {
        res.json(organizations);
      } else {
        res.json("No Organization found by name :" + req.params.name);
      }
    });
  });

  //Add a new organizations
  app.post("/api/organization", function(req, res) {
    console.log(req.body);
    var organization = new Organization({
      logo: req.body.logo,
      name: req.body.name,
      email: req.body.email,
      contactperson: req.body.contactperson,
      phone: req.body.phone,
      address: req.body.address,
      employees: req.body.employees
    });

    console.log("organization " + organization);
    organization.save(function(err) {
      if (err) {
        res.send(err);
      }
      console.log("organization saved");

      res.json(organization);
    });
  });

  app.put("/api/organization/:id", function(req, res) {
    console.log(req.params.id);
    Organization.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function(err, organization) {
        if (err)
          return res
            .status(500)
            .send("There was a problem updating the organization.");
        res.status(200).send(organization);
      }
    );
  });
};
