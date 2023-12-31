//requires
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Router = require("./routes/index.js");
const ejsMate = require("ejs-mate");

//variables
const app = express();
const port = 3000;

//setter
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use("/", Router);
app.engine("ejs", ejsMate);

const mongo_url = "mongodb://127.0.0.1:27017/Bookifyy";

async function main() {
  await mongoose.connect(mongo_url);
}

main()
  .then(() => {
    console.log("Mongoose started");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port);
