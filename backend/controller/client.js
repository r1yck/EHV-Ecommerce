const moment = require('moment');
const clientService = require('../service/client');
const pool = require('../db');

// Validação de email único
const emailExists = async (email) => {
    const [rows] = await pool.query('SELECT * FROM clients WHERE email = ?', [email]);
    return rows.length > 0;
};

// Validação de idade
const isAdult = (birthDate) => {
    const idade = moment().diff(moment(birthDate, 'YYYY-MM-DD'), 'years');
    return idade >= 18;
};

// Criar Client
exports.createClient = async (req, res) => {
    const { nome, email, birthDate } = req.body;

    // Adicionando logs para verificar se os dados estão sendo recebidos corretamente
    console.log('Dados recebidos para criar cliente:', req.body);

    // Validação de email único
    if (await emailExists(email)) {
        console.log(`Email já registrado: ${email}`);
        return res.status(400).json({ message: 'Email já registrado' });
    }

    // Validação de idade
    if (!isAdult(birthDate)) {
        console.log(`Idade inválida para o cliente com data de nascimento ${birthDate}`);
        return res.status(400).json({ message: 'Você precisa ter 18 anos ou mais' });
    }

    try {
        console.log('Tentando criar cliente...');
        const client = await clientService.createClient(req.body);
        console.log('Cliente criado com sucesso:', client);
        res.status(201).json(client);
    } catch (error) {
        console.log('Erro ao criar cliente:', error);  // Log do erro que pode ocorrer no serviço
        res.status(500).json({ message: "Erro ao criar client", error });
    }
};

// Atualizar Client
exports.updateClient = async (req, res) => {
    const { nome, email, birthDate } = req.body;
    const clientId = req.params.id;

    // Validação de email único (excluindo o próprio client)
    if (await emailExists(email)) {
        console.log(`Email já registrado: ${email}`);
        return res.status(400).json({ message: 'Email já registrado' });
    }

    // Validação de idade
    if (!isAdult(birthDate)) {
        console.log(`Idade inválida para o cliente com data de nascimento ${birthDate}`);
        return res.status(400).json({ message: 'Você precisa ter 18 anos ou mais' });
    }

    try {
        console.log('Tentando atualizar cliente...');
        const client = await clientService.updateClient(clientId, req.body);
        if (!client) {
            console.log('Cliente não encontrado');
            return res.status(404).json({ message: "Client não encontrado" });
        }
        console.log('Cliente atualizado com sucesso:', client);
        res.status(200).json(client);
    } catch (error) {
        console.log('Erro ao atualizar cliente:', error);  // Log do erro que pode ocorrer no serviço
        res.status(500).json({ message: "Erro ao atualizar client", error });
    }
};

// Excluir Client
exports.deleteClient = async (req, res) => {
    try {
        console.log('Tentando excluir cliente...');
        const client = await clientService.deleteClient(req.params.id);
        if (!client) {
            console.log('Cliente não encontrado');
            return res.status(404).json({ message: "Client não encontrado" });
        }
        console.log('Cliente excluído com sucesso');
        res.status(200).json({ message: "Client excluído com sucesso" });
    } catch (error) {
        console.log('Erro ao excluir cliente:', error);  // Log do erro que pode ocorrer no serviço
        res.status(500).json({ message: "Erro ao excluir client", error });
    }
};

// Obter Clients
exports.getClients = async (req, res) => {
    try {
        console.log('Tentando obter a lista de clientes...');
        const clients = await clientService.getClients();
        console.log('Clientes obtidos com sucesso:', clients);
        res.status(200).json(clients);
    } catch (error) {
        console.log('Erro ao obter clientes:', error);  // Log do erro que pode ocorrer no serviço
        res.status(500).json({ message: "Erro ao obter clients", error });
    }
};
