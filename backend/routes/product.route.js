/**
 * Product Routes
 * --------------
 * This file defines the API routes for product-related operations.
 * It handles HTTP requests for creating, retrieving, updating, and deleting products.
 * The routes are connected to their respective controller functions.
 */

import express from "express";
import { createProducts, deleteProducts, getProducts, updateProducts } from "../controllers/product.controller.js";

const router = express.Router();

// GET / - Retrieve all products
router.get("/", getProducts);

// POST / - Create a new product
router.post("/", createProducts);

// POST /:id - Update an existing product by ID
router.post("/:id", updateProducts);

// DELETE /:id - Delete a product by ID
router.delete("/:id", deleteProducts);

export default router;