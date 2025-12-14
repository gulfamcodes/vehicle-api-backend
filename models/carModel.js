//carModel.js
const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  brand: String,
  price: Number,
  model: String,
  mileage: Number,
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
