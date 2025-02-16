import { createServer } from "http";
import express from "express";
import path from "path";

// Create the Express application
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Example route for testing (optional)
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
const server = createServer(app);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
