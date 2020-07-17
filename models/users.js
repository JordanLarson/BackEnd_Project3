const mongoose = require("../db/connection");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  antibodies: { type: Boolean, default: true },
  likesYou: { type: Boolean, default: true },
  isFavorite: { type: Boolean, default: false },
  hobbiesBefore: { type: String, required: true },
  hobbiesAfter: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
