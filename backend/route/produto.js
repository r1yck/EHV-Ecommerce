const express = require('express');
const produtoController = require('../controller/produto');

const router = express.Router();

// Rotas para Produtos
router.get('/', produtoController.getProdutos);
router.post('/', produtoController.createProduto);
router.put('/:id', produtoController.updateProduto);
router.delete('/:id', produtoController.deleteProduto);

module.exports = router;
