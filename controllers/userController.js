// userController.js

const User = require("../models/userModel");
const factory = require("./factoryHandler");

exports.getAllUsers = factory.getAll(User, "users");
exports.createUser = factory.createOne(User, "user");
exports.getUser = factory.getOne(User, "user");
exports.updateUser = factory.updateOne(User, "user");
exports.deleteUser = factory.deleteOne(User, "user");
