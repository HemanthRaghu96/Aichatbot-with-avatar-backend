import express from "express";
import cors from "cors";
import chatbotRoutes from "./routes/chatbotRoutes";
import dotenv from "dotenv";
dotenv.config();
const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());
// Define the main route for the chatbot, delegating to chatbotRoutes
app.use("/", chatbotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
