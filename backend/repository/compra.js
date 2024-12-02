const pool = require('../db');

exports.createCompra = async (data) => {
    const { cliente_id, produto_id, quantidade, total } = data;
    const query = "INSERT INTO compras (cliente_id, produto_id, quantidade, total) VALUES (?, ?, ?, ?)";
    return pool.query(query, [cliente_id, produto_id, quantidade, total]);
};

exports.updateCompra = async (id, data) => {
    const { cliente_id, produto_id, quantidade, total } = data;
    const query = "UPDATE compras SET cliente_id = ?, produto_id = ?, quantidade = ?, total = ? WHERE id = ?";
    return pool.query(query, [cliente_id, produto_id, quantidade, total, id]);
};

exports.deleteCompra = async (id) => {
    const query = "DELETE FROM compras WHERE id = ?";
    return pool.query(query, [id]);
};

exports.getCompras = async () => {
    const query = "SELECT * FROM compras";
    return pool.query(query);
};
