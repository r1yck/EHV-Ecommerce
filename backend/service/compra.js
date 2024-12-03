const compraRepository = require('../repository/compra');  // Importa o repositório de compras para interagir com o banco de dados

// Função para criar uma nova compra
exports.createCompra = async (data) => {
    return compraRepository.createCompra(data);  // Chama a função do repositório para criar a compra no banco
};

// Função para atualizar uma compra existente
exports.updateCompra = async (id, data) => {
    return compraRepository.updateCompra(id, data);  // Chama a função do repositório para atualizar a compra com o ID fornecido
};

// Função para excluir uma compra
exports.deleteCompra = async (id) => {
    return compraRepository.deleteCompra(id);  // Chama a função do repositório para excluir a compra com o ID fornecido
};

// Função para obter todas as compras
exports.getCompras = async () => {
    return compraRepository.getCompras();  // Chama a função do repositório para obter todas as compras do banco
};
