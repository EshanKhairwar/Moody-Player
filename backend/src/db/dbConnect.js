const mongoose = require("mongoose");

function dbConnect() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected To MongoDB");
    })
    .catch((error) => {
      console.log("Error Connecting  to MONGODB:",error);
    });
}

module.exports = dbConnect;
