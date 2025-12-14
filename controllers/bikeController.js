// bikeController.js

const Bike = require("../models/bikeModel");
const factory = require("./factoryHandler");

exports.getAllBikes = factory.getAll(Bike, "bikes");
exports.createBike = factory.createOne(Bike, "bike");
exports.getBike = factory.getOne(Bike, "bike");
exports.updateBike = factory.updateOne(Bike, "bike");
exports.deleteBike = factory.deleteOne(Bike, "bike");
