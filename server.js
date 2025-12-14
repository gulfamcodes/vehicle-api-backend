//server.js
const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("✅ DB connection is successful");
  })
  .catch((err) => {
    console.log("❌ DB connection failed.", err);
  });

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
