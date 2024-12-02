const clienteService = require('../service/cliente');

// Criar Cliente
exports.createCliente = async (req, res) => {
    try {
        const cliente = await clienteService.createCliente(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar cliente", error });
    }
};

// Atualizar Cliente
exports.updateCliente = async (req, res) => {
    try {
        const cliente = await clienteService.updateCliente(req.params.id, req.body);
        if (!cliente) {
            return res.status(404).json({ message: "Cliente não encontrado" });
        }
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar cliente", error });
    }
};

// Excluir Cliente
exports.deleteCliente = async (req, res) => {
    try {
        const cliente = await clienteService.deleteCliente(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: "Cliente não encontrado" });
        }
        res.status(200).json({ message: "Cliente excluído com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao excluir cliente", error });
    }
};

// Obter Clientes
exports.getClientes = async (req, res) => {
    try {
        const clientes = await clienteService.getClientes();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ message: "Erro ao obter clientes", error });
    }
};
