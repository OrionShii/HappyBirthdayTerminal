import type { Express } from "express";
import { createServer } from "http";
import express from "express";
import path from "path";

export async function registerRoutes(app: Express) {
  // Serve static files from the public directory
  app.use(express.static('public'));

  // Static content only, no API routes needed
  const httpServer = createServer(app);
  return httpServer;
}