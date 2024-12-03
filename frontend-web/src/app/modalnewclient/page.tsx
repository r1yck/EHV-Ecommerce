import React from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

export default function ModalNovoCliente({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null; // Se a modal for false n retorna nd

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-xl text-black font-bold mb-4 text-center">Novo cliente</h1>
        <form>
          <input type="text" placeholder="Nome" className="w-full p-2 mb-4 border rounded-md"/>
          <input type="email" placeholder="E-mail" className="w-full p-2 mb-4 border rounded-md"/>
          <input type="date" placeholder="Data de nascimento" className="w-full p-2 mb-4 border rounded-md" min="1900-01-01" max="2025-01-01" required/>
          <div className="flex justify-around">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
              Cancelar
            </button>
            <button type="submit"className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
