const pool = require('../db');  // Importando a conexão com o banco de dados

// Create Product
exports.createProduct = async (data) => {
    const { name, price, quantity } = data; // Incluindo quantity
    // Query para inserir um novo produto na tabela 'products'
    const query = "INSERT INTO products (name, price, quantity) VALUES (?, ?, ?)";
    // Executando a query com os parâmetros fornecidos
    const [result] = await pool.execute(query, [name, price, quantity]);
    return result; // Retornando o resultado da operação
};

// Update Product
exports.updateProduct = async (id, data) => {
    const { name, price, quantity } = data; // Incluindo quantity
    // Query para atualizar as informações de um produto existente
    const query = "UPDATE products SET name = ?, price = ?, quantity = ? WHERE id = ?";
    // Executando a query com os parâmetros fornecidos
    const [result] = await pool.execute(query, [name, price, quantity, id]);
    return result; // Retornando o resultado da operação
};

// Delete Product
exports.deleteProduct = async (id) => {
    // Query para deletar um produto da tabela 'products'
    const query = "DELETE FROM products WHERE id = ?";
    // Executando a query com o ID do produto a ser deletado
    const [result] = await pool.execute(query, [id]);
    return result; // Retornando o resultado da operação
};

// Get Products
exports.getProducts = async () => {
    // Query para selecionar todos os produtos da tabela 'products'
    const query = "SELECT * FROM products";
    try {
        // Executando a query para obter os produtos
        const [products] = await pool.execute(query);
        return products; // Retornando todos os produtos encontrados
    } catch (error) {
        console.error("Erro ao buscar produtos:", error); // Logando o erro, caso ocorra
        throw error; // Lançando o erro para ser tratado pelo controlador
    }
};
