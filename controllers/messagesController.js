const express = require("express");
const router = express.Router();
const Message = require("../models/messages");

router.get("/", async (req, res) => {
  try {
    groupIdArray = [req.query.sender, req.query.recipient];
    groupId = groupIdArray.sort().join("_");
    console.log("groupId: " + groupId);

    const messages = await Message.find({ groupId: groupId });
    return res.json({ messages });
  } catch (error) {
    console.log("error");
    return res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Message.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Message deleted");
    }
    throw new Error("Item not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    groupIdArray = [req.body.sender, req.body.recipient];
    groupId = groupIdArray.sort().join("_");
    req.body.groupId = groupId;

    console.log(req.body);
    const newMessage = await new Message(req.body);
    await newMessage.save();
    console.log(newMessage);
    return res.status(201).json(newMessage);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.put("/:id", (req, res) => {
  Message.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updated) => {
      if (error) console.log(error);
      else res.send(updated);
    }
  );
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Message.findById(id);
    if (message) {
      return res.status(200).json({ message });
    }
    return res.status(404).send("Message with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
