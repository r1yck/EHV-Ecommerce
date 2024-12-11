CREATE DATABASE IF NOT EXISTS api_db;

USE api_db;

-- Clients Table
CREATE TABLE clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),       -- Alterado para 'name'
    email VARCHAR(255),
    birthDate DATE,          -- Alterado para 'birthDate' e tipo 'DATE'
    age INT                  -- 'idade' foi alterado para 'age'
);

-- Products Table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),       -- Alterado para 'name'
    price DECIMAL(10, 2)     -- Alterado para 'price'
);

-- Purchases Table
CREATE TABLE purchases (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,          -- Alterado para 'client_id'
    purchase_date DATETIME DEFAULT CURRENT_TIMESTAMP,  -- Alterado para 'purchase_date'
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients(id)
);

-- Purchase Items Table
CREATE TABLE purchase_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    purchase_id INT NOT NULL,        -- Alterado para 'purchase_id'
    product_id INT NOT NULL,         -- Alterado para 'product_id'
    quantity INT NOT NULL,           -- Alterado para 'quantity'
    unit_price DECIMAL(10, 2) NOT NULL,  -- Alterado para 'unit_price'
    FOREIGN KEY (purchase_id) REFERENCES purchases(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);


INSERT INTO clients (name, email, birthDate, age) VALUES ('Test Client', 'test@example.com', '2000-01-01', 24);

SELECT * FROM clients;

