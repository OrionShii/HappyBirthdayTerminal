import type { Express } from "express";
import { createServer } from "http";

export async function registerRoutes(app: Express) {
  // Static content only, no API routes needed
  const httpServer = createServer(app);
  return httpServer;
}
