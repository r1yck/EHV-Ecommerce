const cors = require('cors');
const express = require('express');
const app = express();
const port = 3001;  

// Importando as rotas dos recursos (clientes, produtos, compras)
const clienteRoutes = require('./route/cliente'); 
const produtoRoutes = require('./route/produto');  
const compraRoutes = require('./route/compra');  
const apiRoutes = require('./route/api');


// Middleware para parsing de JSON, para que o corpo das requisições seja interpretado como JSON
app.use(express.json());

app.use(cors()); // Permite requisições de qualquer origem
app.use(express.json()); // Para interpretar o corpo das requisições

// Definindo as rotas principais da API
app.use('/clientes', clienteRoutes); 
app.use('/produtos', produtoRoutes);  
app.use('/compras', compraRoutes);  
app.use('/api', apiRoutes);


// Rota raiz da API
app.get('/', (req, res) => {
    res.send('API funcionando!');
});

// Iniciando o servidor na porta definida
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);  // Log indicando que o servidor iniciou.
});
