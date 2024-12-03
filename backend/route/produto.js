const express = require('express');  // Importa o módulo Express
const produtoController = require('../controller/produto');  // Importa o controller de produtos

const router = express.Router();  // Cria um novo roteador Express

// Rotas para Produtos

// Rota GET para obter todos os produtos
router.get('/', produtoController.getProdutos);

// Rota POST para criar um novo produto
router.post('/', produtoController.createProduto);

// Rota PUT para atualizar um produto específico, baseado no ID
router.put('/:id', produtoController.updateProduto);

// Rota DELETE para excluir um produto específico, baseado no ID
router.delete('/:id', produtoController.deleteProduto);

// Exporta o roteador para ser usado em outros arquivos
module.exports = router;
