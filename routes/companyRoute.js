const express = require("express");
const router = express.Router();
const companyService = require("../services/companyService");

// Route to create a new company
router.post("/", async (req, res) => {
  try {
    const company = await companyService.createCompany(req.body);
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  res.send("Hello from company!");
});

// Add other company-related routes here

module.exports = router;
