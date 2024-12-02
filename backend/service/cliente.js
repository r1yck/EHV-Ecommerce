const clienteRepository = require('../repository/cliente');

exports.createCliente = async (data) => {
    return clienteRepository.createCliente(data);
};

exports.updateCliente = async (id, data) => {
    return clienteRepository.updateCliente(id, data);
};

exports.deleteCliente = async (id) => {
    return clienteRepository.deleteCliente(id);
};

exports.getClientes = async () => {
    return clienteRepository.getClientes();
};
