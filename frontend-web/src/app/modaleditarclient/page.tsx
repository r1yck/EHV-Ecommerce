import { useState } from 'react';
import { User, updateUser } from '../api/api';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  cliente?: User | null; // Cliente a ser editado
  onSave: (user: User) => void; // Função para salvar a edição
}

export default function ModalEditarCliente({ isOpen, onClose, cliente, onSave }: ModalProps) {
  if (!isOpen || !cliente) return null; // Se não estiver aberto ou não houver cliente, não mostra a modal

  const [formData, setFormData] = useState({ ...cliente }); // Preenche com os dados do cliente a ser editado

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onSave(formData); // Chama a função para salvar a edição
      alert("Cliente editado com sucesso!");
      onClose(); // Fecha a modal
    } catch (error) {
      console.error("Erro ao editar cliente:", error);
      alert("Erro ao editar cliente.");
    }
  };

  // Função para salvar a edição (passando para o onSave do pai)
  const handleSaveEdit = async (user: User) => {
    try {
      await updateUser(user); // Chama a função para atualizar o cliente
      alert('Cliente editado com sucesso!');
      // Atualize a lista de clientes ou faça algo mais aqui
    } catch (error) {
      console.error('Erro ao editar cliente:', error);
      alert('Erro ao editar cliente.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-xl text-black font-bold mb-4 text-center">Editar Cliente</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border rounded-md text-black"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border rounded-md text-black"
          />
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border rounded-md text-black"
            min="1900-01-01"
            max="2025-01-01"
            required
          />
          <div className="flex justify-around">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
