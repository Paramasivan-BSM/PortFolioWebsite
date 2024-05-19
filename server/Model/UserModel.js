let Mongoose = require("mongoose");
let formschema = new Mongoose.Schema({
  Name: String,
  Email: String,
  Message: String,
});

let UserModel = Mongoose.model("formdata", formschema);

module.exports = UserModel;
