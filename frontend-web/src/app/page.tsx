'use client'; // Marca o arquivo como um Client Component para exibir na interface

import React, { useEffect, useState } from 'react';
import ModalNovoCliente from './modalnewclient/page';
import { createUser, getUsers, User } from './api/api';



const Main: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // Estado da modal
  const [clientes, setClientes] = useState<any[]>([]); // Lista de clientes
  const [loading, setLoading] = useState(false); // Controlar carregamento da lista
  const [clienteEdicao, setClienteEdicao] = useState<User | null>(null); // Estado para editar o cliente  


  function handleOpenModal() {
    setModalIsOpen(!modalIsOpen); // Alterna entre abrir/fechar a modal
  }

  // Função para buscar clientes via API
  const fetchClientes = async () => {
    setLoading(true); // Mostra que está carregando
    try {
      const data = await getUsers(); // Chama a função para buscar os clientes
      console.log("Clientes recebidos:", data); // Adiciona um log para depuração
      setClientes(data); // Atualiza o estado com os dados
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
      alert("Erro ao buscar clientes. Verifique o console para mais detalhes.");
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  // Chama a função fetchClientes quando o componente for montado
  useEffect(() => {
    fetchClientes();
  }, []); // Array vazio para rodar apenas uma vez, ao montar o componente

  // Função para enviar os dados do formulário ao backend
  const handleCreateUser = async (user: { name: string; email: string; birthDate: string }) => {
    try {
      await createUser(user); // Envia os dados ao backend
      alert('Usuário criado com sucesso!');
      setModalIsOpen(false); // Fecha a modal após sucesso
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      alert('Erro ao criar usuário.');
    }
  };

  const handleEdit = (cliente: User) => {
    setClienteEdicao(cliente); // Preenche o estado com os dados do cliente a ser editado
    setModalIsOpen(true); // Abre a modal ou a tela de edição
  };
  

  return (
    <div className="flex flex-col min-h-screen bg-green-300">
      {/* Navbar */}
      <div className="flex flex-col justify-center items-center p-2">
        <nav className="flex w-3/4 justify-center gap-x-11 py-3 border-4 border-green-700 bg-green-400 rounded-full shadow-lg">
          <a href="#" className="text-lg font-medium text-black hover:text-emerald-700">
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
      {/* Fim da Navbar */}

      {/* Botão Novo Cliente */}
      <div className="flex justify-end p-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-blue-300"
          onClick={handleOpenModal}
        >
          Novo Cliente
        </button>
      </div>

      <ModalNovoCliente isOpen={modalIsOpen} onClose={handleOpenModal} />

      {/* Lista de Clientes */}
      <div className="container m-auto grid grid-cols-3 gap-2 px-4">
        {clientes.length > 0 ? (
          clientes.map((cliente, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-white flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{cliente.name}</h2>
                <p className="text-sm text-gray-600">{cliente.email}</p>
                <p className="text-sm text-gray-500">{cliente.birthDate}</p>
              </div>
              <div className="flex space-x-2 mt-4">
                <button className="flex-1 py-1 text-center bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                  Editar
                </button>
                <button className="flex-1 py-1 text-center bg-red-600 text-white rounded hover:bg-red-700">
                  Inativar
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center h-32">
            <p className="text-center text-gray-600">Nenhum cliente cadastrado</p>
          </div>
        )}
      </div>

      {/* Rodapé */}
      <footer className="py-4 text-center bg-gray-500">
        <p className="text-sm text-black">Feito com ❤️ em Itapetinga</p>
      </footer>
    </div>
  );
};

export default Main;