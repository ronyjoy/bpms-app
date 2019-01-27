const passport = require("passport");
const url = require('url');

module.exports = app => {
  
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  
  
  app.get(
    "/callback",
    passport.authenticate("auth0"),
    (req, res) => {
      console.log("#######User"+req.user);
      var client = req.headers.host.split('.')[0];
      var json = app.get('/api/organizations/'+client+'/employee/'+req.user.email)
      console.log(json);

      if (!req.user) {
        throw new Error("user null");
      }
      res.redirect("/dashboard");
    }
  );

  app.get("/auth/auth0", passport.authenticate("auth0", {}), function(req, res) {
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
