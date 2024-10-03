import { Request, Response } from 'express';
import Product from '../models/ProductModel';

// Create a new product
// @desc    Create a new product
// @route   POST /api/products
// @access  Public
export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch {
    res.status(400);
  }
};

// Get all products
// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch {
    res.status(500);
  }
};

// Get a single product by ID
// @desc    Get a single product by ID
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.status(200).json(product);
  } catch {
    res.status(500);
  }
};

// Update a product by ID
// @desc    Update a product by ID
// @route   PUT /api/products/:id
// @access  Public
export const updateProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedProduct) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.status(200).json(updatedProduct);
  } catch {
    res.status(400);
  }
};

// Delete a product by ID
// @desc    Delete a product by ID
// @route   DELETE /api/products/:id
// @access  Public
export const deleteProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch {
    res.status(500);
  }
};
