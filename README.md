# **EHV-Ecommerce**  

Este projeto consiste em um sistema completo de **E-commerce** para o gerenciamento de **clientes**, **produtos** e **compras**. Ele é dividido em três partes principais: **Backend**, **Frontend Web** e **Frontend Mobile**. O **Backend** é uma API Restful desenvolvida em **Node.js** com **Express** e **MySQL**, enquanto o **Frontend Web** é construído com **Next.js** e o **Frontend Mobile** utiliza **React Native**.

---

## **📁 Estrutura do Projeto**

```
/backend
  /controller   -> Contém os controladores das rotas
  /repository   -> Implementa as consultas ao banco de dados
  /route        -> Define as rotas da aplicação
  /services     -> Regras de negócios (opcional)
  /node_modules -> Dependências do projeto (ignorado no Git)
  server.js     -> Arquivo principal para execução do servidor

/frontend-web
  /src
    /components  -> Componentes reutilizáveis da interface
    /pages       -> Páginas principais da aplicação
    /services    -> Funções para interagir com a API
    /styles      -> Arquivos de estilo (CSS/SCSS)
  package.json   -> Dependências e configurações da aplicação Web

/frontend-mobile
  /src
    /components  -> Componentes reutilizáveis da interface
    /screens     -> Telas principais da aplicação
    /services    -> Funções para interagir com a API
  package.json   -> Dependências e configurações da aplicação Mobile
```

---

## **📦 Tecnologias Utilizadas**

### **Backend**
- **Node.js**
- **Express**
- **MySQL**
- **Nodemon** (para hot-reload em desenvolvimento)

### **Frontend Web**
- **Next.js**
- **Axios** (para requisições HTTP)
- **React Context** (para gerenciamento de estado)

### **Frontend Mobile**
- **React Native**
- **Axios** (para requisições HTTP)

### **Ferramentas**
- **Postman/Insomnia** (para testar a API)

---

## **⚙️ Como Configurar o Ambiente**

### **1. Pré-requisitos**
- **Node.js** instalado (v16 ou superior recomendado)
- **MySQL** instalado
- **React Native CLI** instalado para o Mobile (caso use o mobile)

### **2. Clone o repositório**
```bash
git clone https://github.com/seu-usuario/ehv-ecommerce.git
cd ehv-ecommerce
```

### **3. Backend - Instale as dependências**
```bash
cd backend
npm install
```

### **4. Frontend Web - Instale as dependências**
```bash
cd frontend-web
npm install
```

### **5. Frontend Mobile - Instale as dependências**
```bash
cd frontend-mobile
npm install
```

### **6. Configure o Banco de Dados**
Siga as etapas de configuração do banco de dados descritas no arquivo `database.sql` dentro da pasta `backend`.

### **7. Inicie o Servidor**
Para o **Backend**:
```bash
cd backend
npm start
```

Para o **Frontend Web**:
```bash
cd frontend-web
npm run dev
```

Para o **Frontend Mobile** (emulador ou dispositivo conectado):
```bash
cd frontend-mobile
npx react-native run-android   # ou run-ios, dependendo da plataforma
```

---

## **🚀 Funcionalidades Disponíveis**

### **Backend (API Restful)**

#### **Clientes**
- **GET** `/clientes` - Lista todos os clientes.
- **POST** `/clientes` - Cria um novo cliente.
- **PUT** `/clientes/:id` - Atualiza um cliente existente.
- **DELETE** `/clientes/:id` - Remove um cliente.

#### **Produtos**
- **GET** `/produtos` - Lista todos os produtos.
- **POST** `/produtos` - Cria um novo produto.
- **PUT** `/produtos/:id` - Atualiza um produto existente.
- **DELETE** `/produtos/:id` - Remove um produto.

#### **Compras**
- **GET** `/compras` - Lista todas as compras.
- **POST** `/compras` - Registra uma nova compra.
- **PUT** `/compras/:id` - Atualiza uma compra existente.
- **DELETE** `/compras/:id` - Remove uma compra.

### **Frontend Web (Next.js)**
A interface Web, construída com **Next.js**, permite a interação com a API através de páginas dinâmicas para gerenciar **clientes**, **produtos** e **compras** de forma eficiente e intuitiva.

### **Frontend Mobile (React Native)**
A aplicação mobile, desenvolvida com **React Native**, oferece uma experiência otimizada para dispositivos móveis, permitindo que os usuários gerenciem **clientes**, **produtos** e **compras** diretamente no celular.

---

## **🛠️ Como Testar a API**

1. Utilize **Postman** ou **Insomnia** para testar os endpoints da API.
2. Para testar **POST, PUT e DELETE**, envie o body no formato JSON.

---

## **📄 Licença**

Este projeto é de uso livre para estudos ou modificações. 🚀