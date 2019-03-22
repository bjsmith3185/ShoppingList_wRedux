const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: { type: String },
  myStore: { type: String },
   
  

});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
