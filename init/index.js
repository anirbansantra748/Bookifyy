const mongoose = require("mongoose");
const data = require("./data");
const Book = require("../models/books");

const mongo_url = "mongodb://127.0.0.1:27017/Bookifyy";

async function main() {
  await mongoose.connect(mongo_url);
}

main()
  .then(() => {
    console.log("Mongoose started");
    initDb();
  })
  .catch((err) => {
    console.log(err);
  });

const initDb = async () => {
  try {
    //delete all first
    await Book.deleteMany({});
    //initilise
    await Book.insertMany(data.data );
    console.log("Books are initilise");
  } catch {
    console.log("have some error to initilise the books");
  }
};
