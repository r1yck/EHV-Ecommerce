const express = require('express');  // Importa o módulo Express
const clientController = require('../controller/client');  // Importa o controller de clients

const router = express.Router();  // Cria um novo roteador Express

// Rotas para Clients

// Rota GET para obter todos os clients
router.get('/', clientController.getClients);

// Rota POST para criar um novo client
router.post('/', clientController.createClient);

// Rota PUT para atualizar as informações de um client específico, baseado no ID
router.put('/:id', clientController.updateClient);

// Rota DELETE para excluir um client específico, baseado no ID
router.delete('/:id', clientController.deleteClient);

// Exporta o roteador para ser usado em outros arquivos
module.exports = router;
