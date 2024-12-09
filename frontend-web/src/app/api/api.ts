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
  baseURL: 'http://localhost:3001/api', // Troque pela URL do seu backend
});

// Função para buscar usuários
export const getUsers = async (): Promise<User[]> => {
  const response = await api.get('/users');
  return response.data; // Retorna os dados de usuários
};

// Função para criar um novo usuário
export const createUser = async (user: User): Promise<void> => {
  await api.post('/users', user); // Envia os dados do novo usuário
};

// Funções para produtos
export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get('/products');
  return response.data;
};

export const createProduct = async (product: Product): Promise<void> => {
  await api.post('/products', product);
};

// Funções para compras
export const getPurchases = async (): Promise<Shopping[]> => {
  const response = await api.get('/purchases');
  return response.data;
};

export const createPurchase = async (purchase: Shopping): Promise<void> => {
  await api.post('/purchases', purchase);
};

export default api;

