//bikeModel.js
const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
  brand: String,
  price: Number,
  model: String,
  mileage: Number,
});

const Bike = mongoose.model("Bike", bikeSchema);

module.exports = Bike;
