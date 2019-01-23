const passport = require("passport");

module.exports = app => {
  //google authentication router
  // app.get(
  //   "/auth/google",
  //   passport.authenticate("google", {
  //     scope: ["profile", "email"]
  //   })
  // );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  //google authentication call back router
  // app.get(
  //   "/auth/google/callback",
  //   passport.authenticate("google"),
  //   (req, res) => {
  //     res.redirect("/dashboard");
  //   }
  // );

  ///Auth0

  app.get(
    "/auth0/callback",
    passport.authenticate("auth0", { failureRedirect: "/login" }),
    (req, res) => {
      console.log("#######User"+req.user);
      if (!req.user) {
        throw new Error("user null");
      }
      res.redirect("/dashboard");
    }
  );

  app.get("/auth0/login", passport.authenticate("auth0", {}), function(req, res) {
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
