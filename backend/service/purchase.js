const purchaseRepository = require('../repository/purchase');  // Importa o repositório de purchases para interagir com o banco de dados

// Função para criar uma nova purchase
exports.createPurchase = async (data) => {
    return purchaseRepository.createPurchase(data);  // Chama a função do repositório para criar a purchase no banco
};

// Função para atualizar uma purchase existente
exports.updatePurchase = async (id, data) => {
    return purchaseRepository.updatePurchase(id, data);  // Chama a função do repositório para atualizar a purchase com o ID fornecido
};

// Função para excluir uma purchase
exports.deletePurchase = async (id) => {
    return purchaseRepository.deletePurchase(id);  // Chama a função do repositório para excluir a purchase com o ID fornecido
};

// Função para obter todas as purchases
exports.getPurchases = async () => {
    return purchaseRepository.getPurchases();  // Chama a função do repositório para obter todas as purchases do banco
};
