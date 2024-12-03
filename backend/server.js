const express = require('express');
const app = express();
const port = 3000;  

// Importando as rotas dos recursos (clientes, produtos, compras)
const clienteRoutes = require('./route/cliente'); 
const produtoRoutes = require('./route/produto');  
const compraRoutes = require('./route/compra');  

// Middleware para parsing de JSON, para que o corpo das requisições seja interpretado como JSON
app.use(express.json());

// Definindo as rotas principais da API
app.use('/clientes', clienteRoutes); 
app.use('/produtos', produtoRoutes);  
app.use('/compras', compraRoutes);  

// Rota raiz da API
app.get('/', (req, res) => {
    res.send('API funcionando!');
});

// Iniciando o servidor na porta definida
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);  // Log indicando que o servidor iniciou
});
