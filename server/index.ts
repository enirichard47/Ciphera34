import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleScan } from "./routes/scan";
import rateLimit from "express-rate-limit";

// Rate limiter (1 request every 5 seconds per IP)
export const userRateLimiter = rateLimit({
  windowMs: 5 * 1000,
  max: 1,
  message: {
    status: "error",
    message: "Too many requests — please wait a few seconds."
  }
});

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // ✅ Apply rate limiting BEFORE the routes
  app.use("/api/scan", userRateLimiter);

  // API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.get("/api/scan/:address", handleScan);

  return app;
}
