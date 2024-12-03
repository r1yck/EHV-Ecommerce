const express = require('express');  // Importa o módulo Express
const compraController = require('../controller/compra');  // Importa o controller de compras

const router = express.Router();  // Cria um novo roteador Express

// Rotas para Compras

// Rota GET para obter todas as compras
router.get('/', compraController.getCompras);

// Rota POST para criar uma nova compra
router.post('/', compraController.createCompra);

// Rota PUT para atualizar uma compra específica, baseada no ID
router.put('/:id', compraController.updateCompra);

// Rota DELETE para excluir uma compra específica, baseada no ID
router.delete('/:id', compraController.deleteCompra);

// Exporta o roteador para ser usado em outros arquivos
module.exports = router;
