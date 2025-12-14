// carController.js

const Car = require("../models/carModel");
const factory = require("./factoryHandler");

exports.getAllCars = factory.getAll(Car, "cars");
exports.createCar = factory.createOne(Car, "car");
exports.getCar = factory.getOne(Car, "car");
exports.updateCar = factory.updateOne(Car, "car");
exports.deleteCar = factory.deleteOne(Car, "car");
