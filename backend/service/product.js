const productRepository = require('../repository/product');  // Importa o repositório de products para interagir com o banco de dados

// Função para criar um novo product
exports.createProduct = async (data) => {
    return productRepository.createProduct(data);  // Chama a função do repositório para criar o product no banco
};

// Função para atualizar um product existente
exports.updateProduct = async (id, data) => {
    return productRepository.updateProduct(id, data);  // Chama a função do repositório para atualizar o product com o ID fornecido
};

// Função para excluir um product
exports.deleteProduct = async (id) => {
    return productRepository.deleteProduct(id);  // Chama a função do repositório para excluir o product com o ID fornecido
};

// Função para obter todos os products
exports.getProducts = async () => {
    return productRepository.getProducts();  // Chama a função do repositório para obter todos os products do banco
};
