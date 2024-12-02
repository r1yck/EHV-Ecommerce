const produtoRepository = require('../repository/produto');

exports.createProduto = async (data) => {
    return produtoRepository.createProduto(data);
};

exports.updateProduto = async (id, data) => {
    return produtoRepository.updateProduto(id, data);
};

exports.deleteProduto = async (id) => {
    return produtoRepository.deleteProduto(id);
};

exports.getProdutos = async () => {
    return produtoRepository.getProdutos();
};
