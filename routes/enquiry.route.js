import express from "express";
import enquiryController from "../controllers/enquiry.controller";
const router = express.Router();

router.get('/', (req, res) => {
  enquiryController.getAll(req, res);
});

router.post('/', (req, res) => {
  enquiryController.addEnquiry(req, res);
});

export default router;