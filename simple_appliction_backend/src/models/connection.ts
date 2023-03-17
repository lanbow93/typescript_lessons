//Import dependencies
require("dotenv").config();
const {MONGO_URL} = process.env;
const mongoose = require("mongoose");
import { ErrorRequestHandler } from "express";

mongoose.set("strictQuery", false);

mongoose.connect(MONGO_URL);

mongoose.connection
    .on("open", () => { console.log("Mongo connection has been established")})
    .on("close", () => { console.log("Mongo has disconnected")})
    .on("error", (error: ErrorRequestHandler) => { console.log(error)})

module.exports = mongoose