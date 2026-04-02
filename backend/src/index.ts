import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "CyberSOC Backend is running successfully" });
});

// Mock Authentication Endpoints for now
app.post("/api/auth/register", async (req, res) => {
  const { username, email, password } = req.body;
  // TODO: Add Prisma implementation here
  res.status(201).json({ message: "User registered successfully", user: { username, email } });
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  // TODO: Add Prisma password verification and JWT token generation
  res.json({ token: "mock_jwt_token_for_now", user: { id: 1, email, role: "Administrator" } });
});

app.listen(PORT, () => {
  console.log(`[+] CyberSOC API Server listening on port ${PORT}`);
});
