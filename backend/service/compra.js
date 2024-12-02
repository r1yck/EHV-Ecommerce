const compraRepository = require('../repository/compra');

exports.createCompra = async (data) => {
    return compraRepository.createCompra(data);
};

exports.updateCompra = async (id, data) => {
    return compraRepository.updateCompra(id, data);
};

exports.deleteCompra = async (id) => {
    return compraRepository.deleteCompra(id);
};

exports.getCompras = async () => {
    return compraRepository.getCompras();
};
