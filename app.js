//app.js
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const bikeRouter = require("./routes/bikeRoutes");
const carRouter = require("./routes/carRoutes");

dotenv.config({ path: "./config.env" });
const app = express();

app.use(express.json());
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/bikes", bikeRouter);
app.use("/api/v1/cars", carRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ status: "fail", message: "Something went wrong" });
});

module.exports = app;
