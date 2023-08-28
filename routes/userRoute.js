const express = require("express");
const router = express.Router();
const userService = require("../services/userService");

// Route to create a new user
router.post("/", async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/", async (req, res) => {
  res.send("hello form user!");
});

// Add other user-related routes here

module.exports = router;
