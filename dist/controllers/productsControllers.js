"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductById = exports.updateProductById = exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
const ProductModel_1 = __importDefault(require("../models/ProductModel"));
// Create a new product
// @desc    Create a new product
// @route   POST /api/products
// @access  Public
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield ProductModel_1.default.create(req.body);
        res.status(201).json(product);
    }
    catch (_a) {
        res.status(400);
    }
});
exports.createProduct = createProduct;
// Get all products
// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield ProductModel_1.default.find();
        res.status(200).json(products);
    }
    catch (_b) {
        res.status(500);
    }
});
exports.getAllProducts = getAllProducts;
// Get a single product by ID
// @desc    Get a single product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield ProductModel_1.default.findById(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.status(200).json(product);
    }
    catch (_c) {
        res.status(500);
    }
});
exports.getProductById = getProductById;
// Update a product by ID
// @desc    Update a product by ID
// @route   PUT /api/products/:id
// @access  Public
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield ProductModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedProduct) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.status(200).json(updatedProduct);
    }
    catch (_d) {
        res.status(400);
    }
});
exports.updateProductById = updateProductById;
// Delete a product by ID
// @desc    Delete a product by ID
// @route   DELETE /api/products/:id
// @access  Public
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield ProductModel_1.default.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    }
    catch (_e) {
        res.status(500);
    }
});
exports.deleteProductById = deleteProductById;
