const mongoose = require("../db/connection");

const messageSchema = new mongoose.Schema({
  message: { type: String, required: true },
  sender: { type: String, required: false },
  recipient: { type: String, required: true },
  groupId: { type: String, required: true },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
