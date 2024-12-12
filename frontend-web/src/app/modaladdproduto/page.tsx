import React, { useState } from 'react';
import { Product } from '../api/api';

interface ModalAddProdutoProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
}

const ModalAddProduto: React.FC<ModalAddProdutoProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<Product>({ id: '', name: '', quantity: 0, price: 0 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'quantity' || name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || formData.quantity <= 0 || formData.price <= 0) {
      alert('Preencha todos os campos corretamente!');
      return;
    }
    onSave(formData); // Chama a função de salvar produto
    onClose(); // Fecha a modal
  };

  if (!isOpen) return null; // Se a modal não estiver aberta, não renderiza

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-xl text-black font-bold mb-4 text-center">Adicionar Produto</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange}
           className="w-full p-2 mb-4 border rounded-md text-black"
           placeholder="Nome do Produto"
           required
          />
          <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange}
            className="w-full p-2 mb-4 border rounded-md text-black"
            placeholder="Quantidade"
            min="1"
            required
          />
          <input type="number" name="price" value={formData.price} onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded-md text-black"
          placeholder="Preço"
          min="0"
          required
          step="any"  // Permite valores decimais
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
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAddProduto;
