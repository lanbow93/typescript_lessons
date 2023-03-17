"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const todoRouter = require("./controllers/TodoRouter");
require("dotenv").config();
const app = express();
app.use(morgan("dev"));
app.use(cors({}));
app.use(express.json());
app.get("/", (request, response) => {
    response.json({ message: "Hello" });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});
//# sourceMappingURL=server.js.map