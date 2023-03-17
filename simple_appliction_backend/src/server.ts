import { Application, Request, Response } from "express";


// Import dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const todoRouter = require("./controllers/TodoRouter")
require("dotenv").config();

// Application opject
const app: Application = express();

// Middleware
app.use(morgan("dev"));
app.use(cors({}))
app.use(express.json())


// Routes
app.get("/", (request: Request, response: Response) => {
    response.json({message: "Hello"})
})


// Listener
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
    
})
