const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 8000;
let UserModel = require("./Model/UserModel");
require("dotenv").config();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Establishing MongoDB Connection
mongoose
  .connect(process.env.MongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected Done!"))
  .catch((e) => console.log("MongoDB Connection Failed Due To: " + e));

// Route to handle form data
app.post("/data", (req, res) => {
  console.log(req.body);
  UserModel.create(req.body)
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
