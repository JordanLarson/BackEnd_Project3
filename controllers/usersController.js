const express = require("express");
const router = express.Router();
const User = require("../models/users");
const seedData = require("../db/seedUsers");

router.get("/", (req, res) => res.send("This is root, yeww"));

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    return res.json({ users });
  } catch (error) {
    console.log("error");
    return res.status(500).send(error.message);
  }
});

module.exports = router;
