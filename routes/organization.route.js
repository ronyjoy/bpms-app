import express from "express";
import controller from "../controllers/organization.controller";
const router = express.Router();

//get all organizations

router.get("/", (req, res) => {
  controller.getAll(req, res);
});

//get  organizations by name
router.get("/:name", (req, res) => {
  controller.getByName(req, res);
});

//get  organizations by name
router.get("/:org/employee/:email", (req, res) => {
  controller.getByNameAndEmpEmail(req, res);
});

//Add a new organizations
router.post("/", (req, res) => {
  controller.add(req, res);
});

router.put("/:id", (req, res) => {
  controller.update(req, res);
});

export default router;
