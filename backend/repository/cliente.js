const pool = require('../db');  // Aqui você importa sua conexão com o banco

exports.createCliente = async (data) => {
    const { name, email, age } = data;
    const query = "INSERT INTO clientes (name, email, age) VALUES (?, ?, ?)";
    return pool.query(query, [name, email, age]);
};

exports.updateCliente = async (id, data) => {
    const { name, email, age } = data;
    const query = "UPDATE clientes SET name = ?, email = ?, age = ? WHERE id = ?";
    return pool.query(query, [name, email, age, id]);
};

exports.deleteCliente = async (id) => {
    const query = "DELETE FROM clientes WHERE id = ?";
    return pool.query(query, [id]);
};

exports.getClientes = async () => {
    const query = "SELECT * FROM clientes";
    return pool.query(query);
};
