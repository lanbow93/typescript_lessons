import { ErrorRequestHandler, Request, Response, Router } from "express";

const router: Router = Router()
const TodoModel = require("../models/todo");


// Index
router.get("/", async (request: Request, response: Response) => {
    try {
        response.status(200).json(await TodoModel.find({}))
    } catch (error) {
        response.status(400).json(error)
    }
})

// Destroy
router.delete("/:id", (request: Request, response: Response) => {
    
})

// Update

// Create

// Show



module.exports = router