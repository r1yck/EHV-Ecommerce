const express = require('express');
const app = express();
const port = 3000;

// Importando as rotas
const clienteRoutes = require('./route/cliente');
const produtoRoutes = require('./route/produto');
const compraRoutes = require('./route/compra');

// Middleware para parsing de JSON
app.use(express.json());

// Definindo as rotas
app.use('/clientes', clienteRoutes);
app.use('/produtos', produtoRoutes);
app.use('/compras', compraRoutes);

// Rota raiz
app.get('/', (req, res) => {
    res.send('API funcionando!');
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
