const cors = require('cors');
const express = require('express');
const app = express();
const port = 3001;  

// Importando as rotas dos recursos (clients, products, purchases)
const clientRoutes = require('./route/client'); 
const productRoutes = require('./route/product');  
const purchaseRoutes = require('./route/purchase');  
const apiRoutes = require('./route/api');

// Middleware para parsing de JSON, para que o corpo das requisições seja interpretado como JSON
app.use(express.json());

app.use(cors()); // Permite requisições de qualquer origem
app.use(express.json()); // Para interpretar o corpo das requisições

// Definindo as rotas principais da API
app.use('/clients', clientRoutes); 
app.use('/products', productRoutes);  
app.use('/purchases', purchaseRoutes);  
app.use('/api', apiRoutes);

// Rota raiz da API
app.get('/', (req, res) => {
    res.send('API funcionando!');
});

// Iniciando o servidor na porta definida
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);  // Log indicando que o servidor iniciou.
});
