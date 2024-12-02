const express = require('express');
const compraController = require('../controller/compra');

const router = express.Router();

// Rotas para Compras
router.get('/', compraController.getCompras);
router.post('/', compraController.createCompra);
router.put('/:id', compraController.updateCompra);
router.delete('/:id', compraController.deleteCompra);

module.exports = router;
