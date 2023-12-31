const express = require("express");
const router = express.Router();
const Books = require("../models/books")

router.get("/", async(req,res)=>{
  const allBooks = await Books.find({})
  res.render("index",{allBooks});
})

router.get("/new", (req,res)=>{
  res.render("pages/new");
})

router.post("/new", async(req,res)=>{
  
})

module.exports = router