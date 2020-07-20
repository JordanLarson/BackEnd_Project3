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

router.delete('/users/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await User.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("User deleted");
      }
      throw new Error("Item not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
})

router.post("/users", (req, res) => {
  User.create(req.body, (error, newUser) => {
    if (error) console.log(error);
    else res.send(newUser);
  });
  const newUser = req.body;
    User.push(newUser);
    res.send(newUser);
});



module.exports = router;
