const express = require('express');
const router = express.Router();
const clienteService = require('../service/cliente');
const produtoService = require('../service/produto');
const compraService = require('../service/compra');

// Endpoint para usuários (/users)
router.get('/users', async (req, res) => {
    try {
        const clientes = await clienteService.getClientes();
        const users = clientes.map(cliente => ({
            name: cliente.nome,
            email: cliente.email,
            birthDate: cliente.dataNascimento,
        }));
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

// Endpoint para produtos (/products)
router.get('/products', async (req, res) => {
    try {
        const produtos = await produtoService.getProdutos();
        const products = produtos.map(produto => ({
            id: produto.id,
            name: produto.nome,
            quantity: produto.quantidade,
            price: produto.preco,
        }));
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
});

// Endpoint para compras (/purchases)
router.get('/purchases', async (req, res) => {
    try {
        const compras = await compraService.getCompras();
        const purchases = compras.map(compra => ({
            id: compra.id,
            userId: compra.clienteId,
            productId: compra.produtoId,
            date: compra.dataCompra,
        }));
        res.json(purchases);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar compras' });
    }
});

module.exports = router;
