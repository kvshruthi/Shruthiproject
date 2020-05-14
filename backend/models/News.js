
const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,

    required: [true, "Please add a title for the News"],
    maxlength: 100,
  },
  description: {
    type: String,
    // required: [true, "Please add some text"]
  },
  
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  
});
module.exports = mongoose.model("News", NewsSchema);




