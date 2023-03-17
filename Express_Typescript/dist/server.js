"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// Create application
const app = express();
// Routes
app.get("/", (request, response) => {
    response.json({ message: "Hello World" });
});
app.listen(4000, () => {
    console.log("Listening on port 4000");
});
