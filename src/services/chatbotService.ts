import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

export const getChatbotReply = async (message: string): Promise<string> => {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    throw new Error(
      "Google API key is not defined in the environment variables."
    );
  }
  // Initialize Google Generative AI with the API key
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Use the message as the prompt
  const prompt = message;

  // Generate content using the prompt
  const result: any = await model.generateContent(prompt);
  return result.response.text(); // Response contains text content
};
