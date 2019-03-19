const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShoppingSchema = new Schema({
  
  item: { type: String },

  store: { type: String },

  note: { type: String },
  
  qty: { type: String, default: 1 },
  

});

const Shopping = mongoose.model("Shopping", ShoppingSchema);

module.exports = Shopping;
