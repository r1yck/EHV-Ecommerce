const productService = require('../service/product');

// Criar Product
exports.createProduct = async (req, res) => {
    try {
        // Tenta criar o product com os dados enviados na requisição
        const product = await productService.createProduct(req.body);
        // Retorna o product criado com status 201 (Criado)
        res.status(201).json(product);
    } catch (error) {
        // Caso ocorra algum erro, loga o erro e retorna um erro 500
        console.error("Erro ao criar product:", error);
        res.status(500).json({ message: "Erro ao criar product", error });
    }
};

// Atualizar Product
exports.updateProduct = async (req, res) => {
    try {
        // Tenta atualizar o product com o ID da URL e os dados enviados na requisição
        const product = await productService.updateProduct(req.params.id, req.body);
        // Se o product não for encontrado, retorna erro 404
        if (!product) {
            return res.status(404).json({ message: "Product não encontrado" });
        }
        // Retorna o product atualizado com status 200 (OK)
        res.status(200).json(product);
    } catch (error) {
        // Caso ocorra algum erro, loga o erro e retorna um erro 500
        console.error("Erro ao atualizar product:", error);
        res.status(500).json({ message: "Erro ao atualizar product", error });
    }
};

// Excluir Product
exports.deleteProduct = async (req, res) => {
    try {
        // Tenta excluir o product com o ID da URL
        const product = await productService.deleteProduct(req.params.id);
        // Se o product não for encontrado, retorna erro 404
        if (!product) {
            return res.status(404).json({ message: "Product não encontrado" });
        }
        // Retorna uma mensagem de sucesso ao excluir o product
        res.status(200).json({ message: "Product excluído com sucesso" });
    } catch (error) {
        // Caso ocorra algum erro, loga o erro e retorna um erro 500
        console.error("Erro ao excluir product:", error);
        res.status(500).json({ message: "Erro ao excluir product", error });
    }
};

// Obter Products
exports.getProducts = async (req, res) => {
    try {
        // Tenta obter todos os products
        const products = await productService.getProducts();
        // Retorna todos os products encontrados com status 200 (OK)
        res.status(200).json(products);
    } catch (error) {
        // Caso ocorra algum erro, loga o erro e retorna um erro 500
        console.error("Erro ao obter products:", error);
        res.status(500).json({ message: "Erro ao obter products", error });
    }
};
