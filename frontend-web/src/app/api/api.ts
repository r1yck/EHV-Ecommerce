import axios from 'axios';

export interface User {
  id?: any;
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
  const response = await api.get('/clients');  
  return response.data; // Retorna os dados dos clientes
};

// Função para criar um novo cliente
export const createUser = async (user: User): Promise<void> => {
  await api.post('/clients', user);  
};

// Funções para products
export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get('/products');  
  return response.data;
};

// Função para editar um cliente
export const updateUser = async (user: User): Promise<void> => {
  await api.put(`/clients/${user.id}`, user); 
};


export const createProduct = async (product: Product): Promise<void> => {
  await api.post('/products', product);  
};

// Função para inativar um cliente
export const inactivateUser = async (userId: string): Promise<void> => {
  await api.patch(`/clients/${userId}/inactivate`);
};


// Funções para purchases
export const getPurchases = async (): Promise<Shopping[]> => {
  const response = await api.get('/purchases');  
  return response.data;
};

export const createPurchase = async (purchase: Shopping): Promise<void> => {
  await api.post('/purchases', purchase);  
};

export default api;
