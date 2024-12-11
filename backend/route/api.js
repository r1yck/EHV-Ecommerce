const express = require('express');
const router = express.Router();
const clientService = require('../service/client');
const productService = require('../service/product');
const purchaseService = require('../service/purchase');

// Endpoint for clients (/clients)
router.get('/clients', async (req, res) => {
    try {
        const clients = await clientService.getClients();
        const users = clients.map(client => ({
            id: client.id,
            name: client.name,
            email: client.email,
            birthDate: client.birthDate, // Adjusted to birthDate
        }));
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching clients' }); // Error message in English
    }
});

// Endpoint for products (/products)
router.get('/products', async (req, res) => {
    try {
        const products = await productService.getProducts();
        const productsList = products.map(product => ({
            id: product.id,
            name: product.name, // Adjusted to name
            quantity: product.quantity, // Adjusted to quantity
            price: product.price, // Adjusted to price
        }));
        res.json(productsList);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products' }); // Error message in English
    }
});

// Endpoint for purchases (/purchases)
router.get('/purchases', async (req, res) => {
    try {
        const purchases = await purchaseService.getPurchases();
        const purchaseList = purchases.map(purchase => ({
            id: purchase.id,
            userId: purchase.clientId, // Adjusted to clientId
            productId: purchase.productId, // Adjusted to productId
            date: purchase.purchaseDate, // Adjusted to purchaseDate
        }));
        res.json(purchaseList);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching purchases' }); // Error message in English
    }
});

module.exports = router;
