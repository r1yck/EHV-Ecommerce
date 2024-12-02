const express = require('express');
const clienteController = require('../controller/cliente');

const router = express.Router();

// Rotas para Clientes
router.get('/', clienteController.getClientes);
router.post('/', clienteController.createCliente);
router.put('/:id', clienteController.updateCliente);
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;
