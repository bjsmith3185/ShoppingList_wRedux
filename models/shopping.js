const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShoppingSchema = new Schema({
  
  item: { type: String },

  store: { type: String },

  note: { type: String },
  
  qty: { type: String },
  

});

const Shopping = mongoose.model("Shopping", ShoppingSchema);

module.exports = Shopping;
