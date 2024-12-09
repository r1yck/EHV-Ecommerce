import axios from 'axios';

interface User {
  name: string;
  email: string;
  birthDate: string;
}

export interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface Shopping {
  id: string;
  userId: string;
  productId: string;
  date: string;
}

// Configuração do Axios
const api = axios.create({
  baseURL: 'http://localhost:3001', // URL base do backend
});

// Função para buscar clientes
export const getUsers = async (): Promise<User[]> => {
  const response = await api.get('/clientes');  // Alterado para '/clientes'
  return response.data; // Retorna os dados dos clientes
};

// Função para criar um novo cliente
export const createUser = async (user: User): Promise<void> => {
  await api.post('/clientes', user);  // Alterado para '/clientes'
};

// Funções para produtos
export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get('/produtos');  // Alterado para '/produtos'
  return response.data;
};

export const createProduct = async (product: Product): Promise<void> => {
  await api.post('/produtos', product);  // Alterado para '/produtos'
};

// Funções para compras
export const getPurchases = async (): Promise<Shopping[]> => {
  const response = await api.get('/compras');  // Alterado para '/compras'
  return response.data;
};

export const createPurchase = async (purchase: Shopping): Promise<void> => {
  await api.post('/compras', purchase);  // Alterado para '/compras'
};

export default api;
