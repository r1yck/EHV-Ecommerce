const compraService = require('../service/compra');

exports.createCompra = async (req, res) => {
    try {
        const compra = await compraService.createCompra(req.body);
        res.status(201).json(compra);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar compra", error });
    }
};

exports.updateCompra = async (req, res) => {
    try {
        const compra = await compraService.updateCompra(req.params.id, req.body);
        if (!compra) {
            return res.status(404).json({ message: "Compra não encontrada" });
        }
        res.status(200).json(compra);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar compra", error });
    }
};

exports.deleteCompra = async (req, res) => {
    try {
        const compra = await compraService.deleteCompra(req.params.id);
        if (!compra) {
            return res.status(404).json({ message: "Compra não encontrada" });
        }
        res.status(200).json({ message: "Compra excluída com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao excluir compra", error });
    }
};

exports.getCompras = async (req, res) => {
    try {
        const compras = await compraService.getCompras();
        res.status(200).json(compras);
    } catch (error) {
        res.status(500).json({ message: "Erro ao obter compras", error });
    }
};
