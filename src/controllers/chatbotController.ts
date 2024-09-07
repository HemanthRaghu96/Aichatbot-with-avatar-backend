import { Request, Response } from 'express';
import { getChatbotReply } from '../services/chatbotService';

// Controller function to handle the chatbot conversation
export const chat = async (req: Request, res: Response) => {
  const { message } = req.body; // Extract the message from the request body
  const reply = await getChatbotReply(message);  // Use the chatbot service to get a reply based on the user's message
  res.json({ reply });
};
