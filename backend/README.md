Segue um modelo para o seu `README.md`:

---

# **API Restful - Backend para Gerenciamento de Clientes, Produtos e Compras**

Este projeto é uma API Restful desenvolvida em **Node.js** com **Express** e **MySQL** para gerenciar **clientes**, **produtos** e **compras**. A API suporta operações como **CRUD** (Create, Read, Update, Delete) em todas as entidades.

---

## **📁 Estrutura do Projeto**

```
/controller   -> Contém os controladores das rotas
/repository   -> Implementa as consultas ao banco de dados
/route        -> Define as rotas da aplicação
/services     -> Regras de negócios (opcional, caso usado)
/node_modules -> Dependências do projeto (ignorado no Git)
server.js     -> Arquivo principal para execução do servidor
```

---

## **📦 Tecnologias Utilizadas**

- **Node.js**
- **Express**
- **MySQL**
- **Nodemon** (para hot-reload em desenvolvimento)
- **Postman/Insomnia** (para testar a API)

---

## **⚙️ Como Configurar o Ambiente**

### **1. Pré-requisitos**
- **Node.js** instalado (v16 ou superior recomendado)
- **MySQL** instalado

### **2. Clone o repositório**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### **3. Instale as dependências**
```bash
npm install
```

### **4. Configure o Banco de Dados**
1. Crie um banco de dados MySQL com o seguinte script SQL (localizado em `database.sql`):
    ```sql
    CREATE DATABASE IF NOT EXISTS api_db;

    USE api_db;

    -- Clientes
    CREATE TABLE clientes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255),
        email VARCHAR(255),
        idade INT
    );

    -- Produtos
    CREATE TABLE produtos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255),
        preco DECIMAL(10, 2)
    );

    -- Compras
    CREATE TABLE compras (
        id INT AUTO_INCREMENT PRIMARY KEY,
        id_cliente INT NOT NULL,
        data_compra DATETIME DEFAULT CURRENT_TIMESTAMP,
        total DECIMAL(10, 2) NOT NULL,
        FOREIGN KEY (id_cliente) REFERENCES clientes(id)
    );

    -- Itens de Compra
    CREATE TABLE itens_compra (
        id INT AUTO_INCREMENT PRIMARY KEY,
        id_compra INT NOT NULL,
        id_produto INT NOT NULL,
        quantidade INT NOT NULL,
        preco_unitario DECIMAL(10, 2) NOT NULL,
        FOREIGN KEY (id_compra) REFERENCES compras(id),
        FOREIGN KEY (id_produto) REFERENCES produtos(id)
    );
    ```

2. Atualize as credenciais de conexão ao banco de dados no arquivo de configuração (provavelmente dentro de `repository/`):
    ```javascript
    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'sua-senha',
        database: 'api_db'
    });
    ```

### **5. Inicie o Servidor**
```bash
npm start
```

---

## **🚀 Endpoints Disponíveis**

### **Clientes**
- **GET** `/clientes` - Lista todos os clientes.
- **POST** `/clientes` - Cria um novo cliente.
- **PUT** `/clientes/:id` - Atualiza um cliente existente.
- **DELETE** `/clientes/:id` - Remove um cliente.

### **Produtos**
- **GET** `/produtos` - Lista todos os produtos.
- **POST** `/produtos` - Cria um novo produto.
- **PUT** `/produtos/:id` - Atualiza um produto existente.
- **DELETE** `/produtos/:id` - Remove um produto.

### **Compras**
- **GET** `/compras` - Lista todas as compras.
- **POST** `/compras` - Registra uma nova compra.
- **PUT** `/compras/:id` - Atualiza uma compra existente.
- **DELETE** `/compras/:id` - Remove uma compra.

---

## **🛠️ Como Testar**

1. Use **Postman**, **Insomnia** ou outra ferramenta para testar os endpoints.  
2. Para testar **POST, PUT e DELETE**, envie o body no formato JSON:
   - **Exemplo de POST para Produtos:**
     ```json
     {
       "nome": "Produto Teste",
       "preco": 49.99
     }
     ```

---

## **📄 Licença**

Este projeto é de uso livre para estudos ou modificações. 🚀