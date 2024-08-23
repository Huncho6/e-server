const mongoose = require("mongoose");

const { Schema } = mongoose;

const nikeSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("nike", nikeSchema);
