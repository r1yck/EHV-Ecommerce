import React, { useState } from "react";
import { createUser } from "../api/api";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSave: (user: { name: string; email: string; birthDate: string }) => Promise<void>;
}

export default function ModalNovoCliente({ isOpen, onClose, onSave }: ModalProps) {
  if (!isOpen) return null; // Se a modal for false, não retorna nada

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthDate: "",
  });

  // Atualiza os dados do formulário ao digitar
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Envia os dados para o backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previne o reload da página
    try {
      await onSave(formData); // Chama o onSave passando os dados do formulário
      setFormData({ name: "", email: "", birthDate: "" }); // Reseta o formulário
      onClose(); // Fecha a modal após o sucesso
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      alert("Erro ao criar usuário.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-xl text-black font-bold mb-4 text-center">Novo cliente</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Nome"
            className="w-full p-2 mb-4 border rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="E-mail"
            className="w-full p-2 mb-4 border rounded-md"
            required
          />
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border rounded-md"
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
