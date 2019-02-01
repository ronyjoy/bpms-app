import passport from 'passport';
import Request from "request";
import express from "express";
import controller from "../controllers/auth.controller";
const router = express.Router();

router.get("/api/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/callback", passport.authenticate("auth0"), (req, res) => {
  console.log("#######User" + req.user);
  //let success = await controller.isUserWithOrg(req,res)
  
  // if (!success) {
  //   throw new Error("user null");
  // }
  res.redirect("/dashboard");
});

router.get("/auth/auth0", passport.authenticate("auth0", {}), function(req, res) {
  res.redirect("/");
});

router.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

export default router;