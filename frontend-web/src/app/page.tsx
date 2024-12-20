'use client';

import React, { useEffect, useState } from 'react';
import ModalNovoCliente from './modalnewclient/page';
import ModalEditarCliente from './modaleditarclient/page';
import api, { createUser, getUsers, User } from './api/api';

const Main: React.FC = () => {
  const [clientes, setClientes] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [clienteEdicao, setClienteEdicao] = useState<User | null>(null);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Função para buscar clientes
  const fetchClientes = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setClientes(data);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  // Função para criar um novo cliente
  const handleCreateUser = async (user: { name: string; email: string; birthDate: string }) => {
    try {
      await createUser(user);
      alert('Usuário criado com sucesso!');
      setIsCreateModalOpen(false);
      fetchClientes();
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      alert('Erro ao criar usuário.');
    }
  };

  // Função para abrir o modal de edição
  const handleOpenEditModal = (cliente: User) => {
    setClienteEdicao(cliente);
    setIsEditModalOpen(true);
  };

  // Função para fechar o modal de edição
  const handleCloseEditModal = () => {
    setClienteEdicao(null);
    setIsEditModalOpen(false);
  };

  // Função para salvar as alterações de um cliente
  const handleSaveEdit = async (updatedUser: User) => {
    try {
      await api.put(`/clients/${updatedUser.id}`, updatedUser);
      setClientes((prevClientes) =>
        prevClientes.map((cliente) =>
          cliente.id === updatedUser.id ? { ...cliente, ...updatedUser } : cliente
        )
      );
      alert('Cliente editado com sucesso!');
      handleCloseEditModal();
    } catch (error) {
      console.error('Erro ao editar cliente:', error);
      alert('Erro ao editar cliente.');
    }
  };

  // Função para inativar um cliente
  const handleInactivateClient = async (id: string) => {
    try {
      const response = await api.patch(`/clients/${id}/inactivate`);
      if (response.status === 200) {
        setClientes((prevClientes) =>
          prevClientes.map((cliente) =>
            cliente.id === id ? { ...cliente, isActive: false } : cliente
          )
        );
        alert('Cliente inativado com sucesso!');
      } else {
        throw new Error('Erro ao inativar o cliente');
      }
    } catch (error) {
      console.error('Erro ao inativar cliente:', error);
      alert('Erro ao inativar cliente.');
    }
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

      {/* Botão para criar cliente */}
      <div className="flex justify-end p-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-blue-300"
          onClick={() => setIsCreateModalOpen(true)}
        >
          Novo Cliente
        </button>
      </div>

      {/* Modais */}
      <ModalNovoCliente
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={handleCreateUser}
      />

      {clienteEdicao && (
        <ModalEditarCliente
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          cliente={clienteEdicao}
          onSave={handleSaveEdit}
        />
      )}

      {/* Lista de clientes */}
      <div className="container m-auto grid grid-cols-3 gap-2 px-4">
        {loading ? (
          <p className="text-center text-gray-600 col-span-full">Carregando...</p>
        ) : clientes.length > 0 ? (
          clientes.map((cliente) => (
            <div key={cliente.id} className="p-4 border rounded-lg shadow-sm bg-white">
              <h2 className="text-lg font-semibold text-gray-800">{cliente.name}</h2>
              <p className="text-sm text-gray-600">{cliente.email}</p>
              <p className="text-sm text-gray-500">
                {new Date(cliente.birthDate).toLocaleDateString()}
              </p>
              <div className="flex space-x-2 mt-4">
                <button
                  className="flex-1 py-1 text-center bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                  onClick={() => handleOpenEditModal(cliente)}
                >
                  Editar
                </button>
                <button
                  className="flex-1 py-1 text-center bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={() => handleInactivateClient(cliente.id)}
                >
                  Inativar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">Nenhum cliente cadastrado</p>
        )}
      </div>

      {/* Footer */}
      <footer className="py-4 text-center bg-gray-500">
        <p className="text-sm text-black">Feito com ❤️ em Itapetinga</p>
      </footer>
    </div>
  );
};

export default Main;
