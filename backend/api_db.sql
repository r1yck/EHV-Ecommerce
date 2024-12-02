CREATE DATABASE IF NOT EXISTS api_db;

USE api_db;

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255),
    idade INT
);

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    preco DECIMAL(10, 2)
);

-- Inserindo dados na tabela 'clientes' (clientes)
INSERT INTO clientes (nome, email) VALUES ('João Silva', 'joao@email.com');
INSERT INTO clientes (nome, email) VALUES ('Maria Oliveira', 'maria@email.com');

UPDATE clientes SET idade = 30 WHERE id = 1; -- Define a idade de João Silva como 30
UPDATE clientes SET idade = 25 WHERE id = 2; -- Define a idade de Maria Oliveira como 25

-- Tabela de Compras
CREATE TABLE compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    data_compra DATETIME DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id)
);

-- Tabela de Itens de Compra
CREATE TABLE itens_compra (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_compra INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_compra) REFERENCES compras(id),
    FOREIGN KEY (id_produto) REFERENCES produtos(id)
);

INSERT INTO produtos (nome, preco) VALUES ('Produto Teste', 99.99);

SELECT * FROM produtos;



