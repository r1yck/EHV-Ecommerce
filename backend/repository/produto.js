const pool = require('../db');

exports.createProduto = async (data) => {
    const { nome, preco } = data;
    const query = "INSERT INTO produtos (nome, preco) VALUES (?, ?)";
    return pool.query(query, [nome, preco]);
};

exports.updateProduto = async (id, data) => {
    const { nome, preco } = data;
    const query = "UPDATE produtos SET nome = ?, preco = ? WHERE id = ?";
    return pool.query(query, [nome, preco, id]);
};

exports.deleteProduto = async (id) => {
    const query = "DELETE FROM produtos WHERE id = ?";
    return pool.query(query, [id]);
};

exports.getProdutos = async () => {
    const query = "SELECT * FROM produtos";
    return pool.query(query);
};
