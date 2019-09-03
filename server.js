"use strict";

const scoresRouter = require("./scores.api");
const questionsRouter = require("./question.api");
const express = require("express");
//This file is going to use express, the dependency we are including.
const cors = require("cors");
//This file is going to use cors
const app = express();

//This creates an express application.
app.use(cors());
app.use(express.json());
//This is so that we can receive data that's easy for the computer to read.
app.use("/", questionsRouter);
app.use("/", scoresRouter);
const port = 5433;
//This can be any open port on the machine.
app.listen(port, () => console.log(`Server is listening on port: ${port}`));
