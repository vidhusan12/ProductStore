/**
 * Product Model
 * -------------
 * This file defines the Mongoose schema and model for products.
 * Each product has a name, price, and image, all of which are required fields.
 * The schema also includes automatic timestamps for creation and updates.
 */

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Product = mongoose.model('Product', productSchema);

export default Product;