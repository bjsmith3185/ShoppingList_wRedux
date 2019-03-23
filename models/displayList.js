const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DisplayListSchema = new Schema({
  
  store: { type: String },

  shoppingList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Shopping"
    }
  ]
  

  
});

const DisplayList = mongoose.model("DisplayList", DisplayListSchema);

module.exports = DisplayList;
