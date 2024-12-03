const express = require('express');  // Importa o módulo Express
const clienteController = require('../controller/cliente');  // Importa o controller de clientes

const router = express.Router();  // Cria um novo roteador Express

// Rotas para Clientes

// Rota GET para obter todos os clientes
router.get('/', clienteController.getClientes);

// Rota POST para criar um novo cliente
router.post('/', clienteController.createCliente);

// Rota PUT para atualizar as informações de um cliente específico, baseado no ID
router.put('/:id', clienteController.updateCliente);

// Rota DELETE para excluir um cliente específico, baseado no ID
router.delete('/:id', clienteController.deleteCliente);

// Exporta o roteador para ser usado em outros arquivos
module.exports = router;
