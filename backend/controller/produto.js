const produtoService = require('../service/produto');

exports.createProduto = async (req, res) => {
    try {
        const produto = await produtoService.createProduto(req.body);
        res.status(201).json(produto);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar produto", error });
    }
};

exports.updateProduto = async (req, res) => {
    try {
        const produto = await produtoService.updateProduto(req.params.id, req.body);
        if (!produto) {
            return res.status(404).json({ message: "Produto não encontrado" });
        }
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar produto", error });
    }
};

exports.deleteProduto = async (req, res) => {
    try {
        const produto = await produtoService.deleteProduto(req.params.id);
        if (!produto) {
            return res.status(404).json({ message: "Produto não encontrado" });
        }
        res.status(200).json({ message: "Produto excluído com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao excluir produto", error });
    }
};

exports.getProdutos = async (req, res) => {
    try {
        const produtos = await produtoService.getProdutos();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ message: "Erro ao obter produtos", error });
    }
};
