import passport from "passport";
import express from "express";
import controller from "../controllers/auth.controller";
import logger from "../core/logger/app.logger";

const router = express.Router();

router.get("/logout", (req, res) => {
  req.user = null;
  req.logout();
  res.redirect("/"); //Inside a callback… bulletproof!
});

router.get(
  "/callback",
  passport.authenticate("auth0", { failureRedirect: "/login" }),
  async (req, res) => {
    logger.info("Logged in User %o", req.user);
    let orgName = req.headers.host.split(".")[0];
    let user = req.user.email;
    let resp = await controller.isUserWithOrg(orgName, user);
    logger.info("isUserWithOrg %s", resp);

    if (resp) {
      res.redirect("/dashboard");
    } else {
      req.logout();
      res.redirect("/401");
    }

  
  }
);

router.get(
  "/auth0",
  passport.authenticate("auth0", { failureRedirect: "/login" }),
  function(req, res) {
    res.redirect("/");
  }
);
router.get(
  "/login",
  passport.authenticate("auth0", { failureRedirect: "/login" }),
  function(req, res) {
    res.redirect("/");
  }
);

router.get("/current_user", (req, res) => {
  res.send(req.user);
});

export default router;
