import { Application, Request, Response } from "express";

const express = require("express");

// Create application

const app: Application = express()

// Routes
app.get("/", (request: Request, response: Response) => {
    response.json({message: "Hello World"})
})


app.listen(4000, () => {
    console.log("Listening on port 4000")
} )