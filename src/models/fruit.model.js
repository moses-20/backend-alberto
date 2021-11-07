const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  para: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const Fruit = mongoose.model("fruit", fruitSchema);

module.exports = Fruit;
