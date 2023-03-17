"use strict";
const mongoose = require("./connection");
const todoSchema = new mongoose.Schema({
    item: String
}, { timestamps: true });
const Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;
//# sourceMappingURL=todo.js.map