//carRoutes.js
const express = require("express");
const {
  getAllCars,
  createCar,
  getCar,
  updateCar,
  deleteCar,
} = require("../controllers/carController");

const router = express.Router();

router.route("/").get(getAllCars);
router.route("/createCar").post(createCar);

router.route("/:id").get(getCar).patch(updateCar).delete(deleteCar);

module.exports = router;
