"use strict";

const express = require("express");
const router = express.Router();


router.get("/scores", (req, res) => {
    console.log("GET request is working");
    res.send("GET request is working");
  });
  
  router.post("/scores", (req, res) => {
    console.log("POST is working");
    res.send("POST is working");
    //   res.send(req.body); //data that you're posting
  });



module.exports = router;
