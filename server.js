const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const userController = require("./controllers/usersController");
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

app.use("/api", userController);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
