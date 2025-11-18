import path from "path";
import { createServer } from "./index";
import * as express from "express";
import { fileURLToPath } from "url";

const app = createServer();
const port = process.env.PORT || 3000;

// Resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In production, serve the built SPA files
const distPath = path.join(__dirname, "../spa");

// Serve static files
app.use(express.static(distPath));

// Handle React Router - serve index.html for all non-API routes
app.use((req, res, next) => {
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return next(); // let API handle it
  }
  res.sendFile(path.join(distPath, "index.html"));
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
