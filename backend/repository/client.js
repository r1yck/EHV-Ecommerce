const moment = require('moment');  // Importando o moment para calcular a idade
const pool = require('../db');  // Importa a conexão com o banco de dados

// Função para calcular a idade a partir da data de nascimento
const calculateAge = (birthDate) => {
    // Garantir que o birthDate seja uma data válida
    const parsedDate = moment(birthDate, 'YYYY-MM-DD', true);

    // Verificar se a data é válida
    if (!parsedDate.isValid()) {
        throw new Error('Data de nascimento inválida');
    }

    // Calcular a idade
    const age = moment().diff(parsedDate, 'years');
    console.log("Data de nascimento:", birthDate);  // Exibe a data recebida
    console.log("Idade calculada:", age);  // Exibe a idade calculada
    return age;
};

// Create Client
exports.createClient = async (data) => {
    const { name, email, birthDate } = data;  // Alterado para 'birthDate'

    // Verificar se todos os parâmetros estão presentes
    if (!name || !email || !birthDate) {
        throw new Error('Faltando parâmetros obrigatórios (name, email ou birthDate)');
    }

    console.log("Dados recebidos para criação de cliente:", data);  // Exibe todos os dados recebidos, incluindo a data de nascimento

    // Calcular a idade a partir da data de nascimento
    const age = calculateAge(birthDate);  // Alterado para 'birthDate'

    // Verificar se a idade é maior ou igual a 18
    if (age < 18) {
        console.log("Idade verificada (menor que 18):", age);  // Verifique a idade antes de lançar o erro
        throw new Error('Você precisa ter 18 anos ou mais');
    }

    try {
        // Query to insert a new client into the 'clients' table
        const query = "INSERT INTO clients (name, email, birthDate, age) VALUES (?, ?, ?, ?)";  // Alterado para 'birthDate'
        const [result] = await pool.execute(query, [name, email, birthDate, age]);  // Alterado para 'birthDate'
        console.log("Cliente criado com sucesso:", result);  // Exibe o sucesso da inserção

        // Após inserir, recupera os dados do cliente criado
        const queryGetClient = "SELECT * FROM clients WHERE id = ?";
        const [client] = await pool.execute(queryGetClient, [result.insertId]);

        console.log("Cliente criado:", client);  // Exibe os dados do cliente

        return client[0];  // Retorna os dados completos do cliente criado
    } catch (error) {
        console.log("Erro ao inserir cliente:", error.message);  // Exibe o erro ocorrido
        throw new Error(`Erro ao inserir cliente: ${error.message}`);
    }
};

// Update Client
exports.updateClient = async (id, data) => {
    const { name, email, birthDate } = data;  // Alterado para 'birthDate'

    // Verificar se todos os parâmetros estão presentes
    if (!name || !email || !birthDate) {
        throw new Error('Faltando parâmetros obrigatórios (name, email ou birthDate)');
    }

    console.log("Dados recebidos para atualização de cliente:", data);  // Exibe todos os dados recebidos para atualização

    // Calcular a idade a partir da data de nascimento
    const age = calculateAge(birthDate);  // Alterado para 'birthDate'

    try {
        // Query to update an existing client's information
        const query = "UPDATE clients SET name = ?, email = ?, birthDate = ?, age = ? WHERE id = ?";  // Alterado para 'birthDate'
        const [result] = await pool.execute(query, [name, email, birthDate, age, id]);  // Alterado para 'birthDate'
        console.log("Cliente atualizado com sucesso:", result);  // Exibe o sucesso da atualização

        // Após atualizar, recupera os dados do cliente atualizado
        const queryGetClient = "SELECT * FROM clients WHERE id = ?";
        const [client] = await pool.execute(queryGetClient, [id]);

        console.log("Cliente atualizado:", client);  // Exibe os dados atualizados do cliente

        return client[0];  // Retorna os dados completos do cliente atualizado
    } catch (error) {
        console.log("Erro ao atualizar cliente:", error.message);  // Exibe o erro ocorrido
        throw new Error(`Erro ao atualizar cliente: ${error.message}`);
    }
};

// Delete Client
exports.deleteClient = async (id) => {
    try {
        // Query to delete a client from the 'clients' table
        const query = "DELETE FROM clients WHERE id = ?";
        // Usando o 'execute' para rodar a query com o ID do cliente a ser deletado
        const [result] = await pool.execute(query, [id]);
        console.log("Cliente deletado com sucesso:", result);  // Exibe o sucesso da exclusão
        return result;  // Retorna o resultado da operação (cliente deletado)
    } catch (error) {
        console.log("Erro ao excluir cliente:", error.message);  // Exibe o erro ocorrido
        throw new Error(`Erro ao excluir cliente: ${error.message}`);
    }
};

// Get Clients
exports.getClients = async () => {
    try {
        // Query to select all clients from the 'clients' table
        const query = "SELECT * FROM clients";
        // Usando o 'execute' para rodar a query e obter os resultados
        const [clients] = await pool.execute(query);
        console.log("Clientes obtidos com sucesso:", clients);  // Exibe os clientes recuperados
        return clients;  // Retorna todos os clientes encontrados
    } catch (error) {
        console.log("Erro ao obter clientes:", error.message);  // Exibe o erro ocorrido
        throw new Error(`Erro ao obter clientes: ${error.message}`);
    }
};
