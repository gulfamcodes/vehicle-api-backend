//bikeRoutes.js
const express = require("express");
const {
  getAllBikes,
  createBike,
  getBike,
  updateBike,
  deleteBike,
} = require("../controllers/bikeController");

const router = express.Router();

router.route("/").get(getAllBikes);
router.route("/createBike").post(createBike);

router.route("/:id").get(getBike).patch(updateBike).delete(deleteBike);

module.exports = router;
