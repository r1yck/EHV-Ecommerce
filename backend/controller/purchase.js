const purchaseService = require('../service/purchase');

// Criar Purchase
exports.createPurchase = async (req, res) => {
    try {
        // Tenta criar a purchase com os dados enviados na requisição
        const purchase = await purchaseService.createPurchase(req.body);
        // Retorna a purchase criada com status 201 (Criado)
        res.status(201).json(purchase);
    } catch (error) {
        // Caso ocorra algum erro, retorna um erro 500 com a mensagem
        res.status(500).json({ message: "Erro ao criar purchase", error });
    }
};

// Atualizar Purchase
exports.updatePurchase = async (req, res) => {
    try {
        // Tenta atualizar a purchase com o ID da URL e os dados enviados na requisição
        const purchase = await purchaseService.updatePurchase(req.params.id, req.body);
        // Se a purchase não for encontrada, retorna erro 404
        if (!purchase) {
            return res.status(404).json({ message: "Purchase não encontrada" });
        }
        // Retorna a purchase atualizada com status 200 (OK)
        res.status(200).json(purchase);
    } catch (error) {
        // Caso ocorra algum erro, retorna um erro 500 com a mensagem
        res.status(500).json({ message: "Erro ao atualizar purchase", error });
    }
};

// Excluir Purchase
exports.deletePurchase = async (req, res) => {
    try {
        // Tenta excluir a purchase com o ID da URL
        const purchase = await purchaseService.deletePurchase(req.params.id);
        // Se a purchase não for encontrada, retorna erro 404
        if (!purchase) {
            return res.status(404).json({ message: "Purchase não encontrada" });
        }
        // Retorna uma mensagem de sucesso ao excluir a purchase
        res.status(200).json({ message: "Purchase excluída com sucesso" });
    } catch (error) {
        // Caso ocorra algum erro, retorna um erro 500 com a mensagem
        res.status(500).json({ message: "Erro ao excluir purchase", error });
    }
};

// Obter Purchases
exports.getPurchases = async (req, res) => {
    try {
        // Tenta obter todas as purchases
        const purchases = await purchaseService.getPurchases();
        // Retorna a lista de purchases com status 200 (OK)
        res.status(200).json(purchases);
    } catch (error) {
        // Caso ocorra algum erro, retorna um erro 500 com a mensagem
        res.status(500).json({ message: "Erro ao obter purchases", error });
    }
};
