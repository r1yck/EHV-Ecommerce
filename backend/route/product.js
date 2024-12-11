const express = require('express');  // Importa o módulo Express
const productController = require('../controller/product');  // Importa o controller de products

const router = express.Router();  // Cria um novo roteador Express

// Rotas para Products

// Rota GET para obter todos os products
router.get('/', productController.getProducts);

// Rota POST para criar um novo product
router.post('/', productController.createProduct);

// Rota PUT para atualizar um product específico, baseado no ID
router.put('/:id', productController.updateProduct);

// Rota DELETE para excluir um product específico, baseado no ID
router.delete('/:id', productController.deleteProduct);

// Exporta o roteador para ser usado em outros arquivos
module.exports = router;
