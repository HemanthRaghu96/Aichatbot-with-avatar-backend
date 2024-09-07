"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chat = void 0;
const chatbotService_1 = require("../services/chatbotService");
// Controller function to handle the chatbot conversation
const chat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { message } = req.body; // Extract the message from the request body
    const reply = yield (0, chatbotService_1.getChatbotReply)(message); // Use the chatbot service to get a reply based on the user's message
    res.json({ reply });
});
exports.chat = chat;
