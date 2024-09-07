"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chatbotController_1 = require("../controllers/chatbotController");
const router = (0, express_1.Router)();
// Define a POST route for '/chat' that calls the chat controller function
router.post("/chat", chatbotController_1.chat);
exports.default = router;
