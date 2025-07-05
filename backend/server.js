/**
 * Server Entry Point
 * ------------------
 * This file initializes the Express application, loads environment variables,
 * connects to the MongoDB database, and sets up the main API route for products.
 * The server listens for incoming HTTP requests on port 5000.
 */

import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Allows the server to accept JSON data in request bodies

// Product API routes
app.use("/api/products", productRoutes);

// Start the server and connect to the database
app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
