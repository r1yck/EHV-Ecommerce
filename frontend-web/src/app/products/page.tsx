'use client';

import { useState, useEffect } from 'react';
import { getProducts, createProduct, Product } from '../api/api';
import ModalAddProduto from '../modaladdproduto/page';

export default function Products() {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // Estado para modal

  // Função para buscar produtos
  const fetchProducts = async () => {
    try {
      const fetchedProducts = await getProducts();
      // Normalizando os dados para garantir que `price` seja um número
      const normalizedProducts = fetchedProducts.map((product) => ({
        ...product,
        price: Number(product.price), // Converte `price` para número, caso seja string
        quantity: product.quantity || 0,
      }));
      setProducts(normalizedProducts);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    } finally {
      setLoading(false);
    }
  };

  // Função para salvar produto
  const handleSaveProduct = async (product: Product) => {
    try {
      await createProduct(product);
      fetchProducts(); // Atualiza lista
      alert('Produto adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      alert('Erro ao adicionar produto.');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-green-300">
      {/* Navbar */}
      <div className="flex flex-col justify-center items-center p-2">
        <nav className="flex w-3/4 justify-center gap-x-11 py-3 border-4 border-green-700 bg-green-400 rounded-full shadow-lg">
          <a href="/" className="text-lg font-medium text-black hover:text-emerald-700">
            Clientes
          </a>
          <a href="/shopping" className="text-lg font-medium text-black hover:text-emerald-700">
            Compras
          </a>
          <a href="/products" className="text-lg font-medium text-black hover:text-emerald-700">
            Produtos
          </a>
        </nav>
      </div>

      {/* Botão de adicionar produto */}
      <div className="flex justify-end p-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-blue-300"
          onClick={() => setIsAddModalOpen(true)}
        >
          Adicionar Produto
        </button>
      </div>

      {/* Modal para adicionar produto */}
      <ModalAddProduto
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveProduct}
      />

      {/* Lista de produtos */}
      <div className="container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="p-4 border rounded-lg shadow-sm bg-white flex flex-col justify-between"
            >
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-600">Quantidade: {product.quantity}</p>
              <p className="text-sm text-gray-500">
                Valor: R$ {typeof product.price === 'number' ? product.price.toFixed(2) : '0.00'}
              </p>
            </div>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center h-32">
            <p className="text-center text-gray-600">Nenhum produto cadastrado</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-4 text-center bg-gray-500">
        <p className="text-sm text-black">Feito com ❤️ em Itapetinga</p>
      </footer>
    </div>
  );
}
