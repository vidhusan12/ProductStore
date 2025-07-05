/**
 * Database Connection
 * -------------------
 * This file defines the function to connect to the MongoDB database using Mongoose.
 * It reads the MongoDB URI from environment variables and attempts to establish a connection.
 * If the connection fails, the process exits with an error code.
 */

import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1); // process code 1 means exit with failure, 0 means success
  };
}