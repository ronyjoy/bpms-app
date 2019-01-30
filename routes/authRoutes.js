const passport = require("passport");
const Request = require("request");
const express = require("express");
const router = express.Router();

router.get("/api/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/callback", passport.authenticate("auth0"), (req, res) => {
  console.log("#######User" + req.user);
  var client = req.headers.host.split(".")[0];
  var employee;
  Request.get(
    req.protocol +
      "://" +
      req.headers.host +
      "/api/organizations/" +
      client +
      "/employee/" +
      req.user.email,
    (err, res, body) => {
      if (err) {
        return console.dir(err);
      }
      console.log(JSON.parse(body).organizations);
      // if (req.user.email!=body[0].employees[0].email) {
      //   throw new Error("user not authorized");
      // }
      //res.redirect("/dashboard");
    }
  );

  console.log("user email:" + req.user.email);
  if (!req.user) {
    throw new Error("user null");
  }
  res.redirect("/dashboard");
});

router.get("/auth/auth0", passport.authenticate("auth0", {}), function(req, res) {
  res.redirect("/");
});

router.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

module.exports = router;