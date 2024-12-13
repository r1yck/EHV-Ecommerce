# **EHV-Ecommerce**  

Este projeto consiste em um sistema completo de **E-commerce** para o gerenciamento de **clients**, **products** e **purchases**. Ele é dividido em três partes principais: **Backend**, **Frontend Web** e **Frontend Mobile**. O **Backend** é uma API Restful desenvolvida em **Node.js** com **Express** e **MySQL**, enquanto o **Frontend Web** é construído com **Next.js** e o **Frontend Mobile** utiliza **React Native**.

---

## **📁 Estrutura do Projeto**

```
/backend
  /controller   -> Contém os controladores das rotas
  /repository   -> Implementa as consultas ao banco de dados
  /route        -> Define as rotas da aplicação
  /services     -> Contém as regras de negócios (agora presente para manipulação de dados)
  /node_modules -> Dependências do projeto (ignorado no Git)
  server.js     -> Arquivo principal para execução do servidor

/frontend-web
  /src
    /app 
      /shopping        -> pagina purchases
      /modalnewclient  -> Componentes modal novo cliente
      /products        -> Páginas products
      /services        -> Funções para interagir com a API
  package.json         -> Dependências e configurações da aplicação Web

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
- **TailwindCSS** Framework de CSS para construção rápida de interfaces responsivas e personalizáveis.

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

#### **Clients**
- **GET** `/clients` - Lista todos os clients. (Chama o `clientservice` que utiliza o `clienteRepository` para buscar os dados)
- **POST** `/clients` - Cria um novo cliente. (Utiliza o `clientservice` para criar e validar os dados antes de salvar no banco)
- **PUT** `/clients/:id` - Atualiza um cliente existente. (Chama o `clientservice` para fazer a atualização)
- **DELETE** `/clients/:id` - Remove um cliente. (Chama o `clientservice` para deletar o cliente)

#### **Products**
- **GET** `/products` - Lista todos os products. (Chama o `productservice` que utiliza o `produtoRepository`)
- **POST** `/products` - Cria um novo produto. (Chama o `productservice` para validar e salvar o produto)
- **PUT** `/products/:id` - Atualiza um produto existente. (Usa o `productservice`)
- **DELETE** `/products/:id` - Remove um produto. (Chama o `productservice`)

#### **purchases**
- **GET** `/purchases` - Lista todas as purchases. (Chama o `purchaseservice` que usa o `compraRepository`)
- **POST** `/purchases` - Registra uma nova compra. (Utiliza o `purchaseservice` para gerenciar o processo)
- **PUT** `/purchases/:id` - Atualiza uma compra existente. (Usa o `purchaseservice`)
- **DELETE** `/purchases/:id` - Remove uma compra. (Chama o `purchaseservice` para deletar a compra)

### **Frontend Web (Next.js)**
A interface Web, construída com **Next.js**, permite a interação com a API através de páginas dinâmicas para gerenciar **clients**, **products** e **purchases** de forma eficiente e intuitiva.

**Pagina clients**
![image](https://github.com/user-attachments/assets/fac2fedc-8529-4d2a-a0f7-9d156744b1dc)
**pagina produtcs**
![image](https://github.com/user-attachments/assets/00b5016b-09ec-4bcd-8083-84a70c020a61)
**Pagina purchases**
![image](https://github.com/user-attachments/assets/30f2529f-eb15-40a2-9c46-c8a91358a1f6)


### **Frontend Mobile (React Native)**
A aplicação mobile, desenvolvida com **React Native**, oferece uma experiência otimizada para dispositivos móveis, permitindo que os usuários gerenciem **clients**, **products** e **purchases** diretamente no celular.

---

## **🛠️ Como Testar a API**

1. Utilize **Postman** ou **Insomnia** para testar os endpoints da API.
2. Para testar **POST, PUT e DELETE**, envie o body no formato JSON. **Lembre-se de que certas validações, como verificação de unicidade de email ou idade mínima, estão sendo feitas diretamente no serviço**, então um erro será retornado caso algum critério não seja atendido.

---

## **📄 Licença**

Este projeto é de uso livre para estudos ou modificações. 🚀
