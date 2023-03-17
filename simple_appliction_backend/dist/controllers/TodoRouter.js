"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const TodoModel = require("../models/todo");
router.get("/", async (request, response) => {
    try {
        response.status(200).json(await TodoModel.find({}));
    }
    catch (error) {
        response.status(400).json(error);
    }
});
router.delete("/:id", (request, response) => {
});
module.exports = router;
//# sourceMappingURL=TodoRouter.js.map