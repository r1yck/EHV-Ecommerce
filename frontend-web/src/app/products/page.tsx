'use client'; 

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getProducts, Product } from '../api/api';

export default function Products() { 

  
  const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento

  // Função para buscar os produtos da API
  const fetchProducts = async (fetchedProducts?: Product[]) => {
    try {
      const fetchedProducts = await getProducts(); // Busca os produtos diretamente
      fetchProducts(fetchedProducts); // Atualiza o estado com os produtos
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  // useEffect para chamar a função de buscar produtos ao carregar o componente
  useEffect(() => {
    fetchProducts(); // Chama a função de buscar produtos
  }, []); // O array vazio significa que isso ocorre uma única vez ao montar o componente

  if (loading) return <div>Carregando...</div>;
  return (
    
    <div className="flex flex-col min-h-screen bg-green-300 ">
      {/* Navbar */}
        <div className="flex flex-col justify-center items-center p-2"> {/* Usei essa Div para centralizar a navbar */}
            <nav className="flex w-3/4 justify-center gap-x-11 py-3 border-4 border-green-700 bg-green-400 rounded-full shadow-lg">
                <a href={"/"} className="text-lg font-medium text-black hover:text-emerald-700 ">
                    Clientes
                </a>
                <a href="/shopping" className="text-lg font-medium text-black hover:text-emerald-700">
                    Compras
                </a>
                <a href="#" className="text-lg font-medium text-black hover:text-emerald-700">
                    Produtos
                </a>
            </nav>
        </div>
      {/* Navbar */}
      
      {/* Lista de Produtos */}
      <div className="container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {Products.length > 0 ? products.map((product: Product) =>(
          <div
            key={product.id}
            className="p-4 border rounded-lg shadow-sm bg-white flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-600">Quantidade: {product.quantity}</p>
              <p className="text-sm text-gray-500">Valor: {product.price.toFixed(2)}</p>
            </div>
            <div className="flex space-x-2 mt-4">
              <button className="flex-1 py-1 text-center bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                Colocar no carrinho
              </button>
            </div>
          </div>
        ))
       : (
        <div className="col-span-full flex justify-center items-center h-32">
            <p className="text-center text-gray-600">Nenhum produto cadastrado</p>
          </div>
      )}
      </div>

      <footer className="py-4 text-center bg-gray-500">
        <p className="text-sm text-black">
          Feito com ❤️ em Itapetinga
        </p>
      </footer>
    </div> 
  );
}
