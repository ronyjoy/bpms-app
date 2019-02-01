import express from "express";
import controller from "../controllers/customer.controller";
const router = express.Router();


router.get("/", (req, res) => {
  controller.getAll(req, res);
});

router.post("/", (req, res) => {
  controller.add(req, res);
});

router.put("/:id", (req, res) => {
  controller.update(req, res);
});

module.exports = router;
