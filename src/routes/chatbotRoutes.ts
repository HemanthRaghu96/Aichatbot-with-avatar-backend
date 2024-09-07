import { Router } from "express";
import { chat } from "../controllers/chatbotController";

const router = Router();

// Define a POST route for '/chat' that calls the chat controller function
router.post("/chat", chat);

export default router;
