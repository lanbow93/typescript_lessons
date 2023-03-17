"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const { MONGO_URL } = process.env;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL);
mongoose.connection
    .on("open", () => { console.log("Mongo connection has been established"); })
    .on("close", () => { console.log("Mongo has disconnected"); })
    .on("error", (error) => { console.log(error); });
module.exports = mongoose;
//# sourceMappingURL=connection.js.map