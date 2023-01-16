const express = require('express');
const { getAllProducts, createProducts, updateProduct, deleteProduct, getProductDetails } = require('../controllers/products.controller');
const { isAuthenticatedUser } = require('../middleware/auth');

const router = express.Router();

router.get("/products", isAuthenticatedUser, getAllProducts);
router.get("/products/:id", getProductDetails);
router.post("/products/new", createProducts);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;