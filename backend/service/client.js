const clientRepository = require('../repository/client');  // Importa o repositório de clients para interagir com o banco de dados

// Função para criar um novo client
exports.createClient = async (data) => {
    return clientRepository.createClient(data);  // Chama a função do repositório para criar o client no banco
};

// Função para atualizar um client existente
exports.updateClient = async (id, data) => {
    return clientRepository.updateClient(id, data);  // Chama a função do repositório para atualizar o client com o ID fornecido
};

// Função para excluir um client
exports.deleteClient = async (id) => {
    return clientRepository.deleteClient(id);  // Chama a função do repositório para excluir o client com o ID fornecido
};

// Função para obter todos os clients
exports.getClients = async () => {
    return clientRepository.getClients();  // Chama a função do repositório para obter todos os clients do banco
};
