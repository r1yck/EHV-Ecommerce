const express = require('express');  // Importa o módulo Express
const purchaseController = require('../controller/purchase');  // Importa o controller de purchases

const router = express.Router();  // Cria um novo roteador Express

// Rotas para Purchases

// Rota GET para obter todas as purchases
router.get('/', purchaseController.getPurchases);

// Rota POST para criar uma nova purchase
router.post('/', purchaseController.createPurchase);

// Rota PUT para atualizar uma purchase específica, baseada no ID
router.put('/:id', purchaseController.updatePurchase);

// Rota DELETE para excluir uma purchase específica, baseada no ID
router.delete('/:id', purchaseController.deletePurchase);

// Exporta o roteador para ser usado em outros arquivos
module.exports = router;
