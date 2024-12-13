CREATE DATABASE IF NOT EXISTS api_db;

USE api_db;

-- Clients Table
CREATE TABLE clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),       
    email VARCHAR(255),
    birthDate DATE,         
    age INT                 
);

-- Products Table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),      
    price DECIMAL(10, 2)     
);

-- Purchases Table
CREATE TABLE purchases (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,         
    purchase_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients(id)
);

-- Purchase Items Table
CREATE TABLE purchase_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    purchase_id INT NOT NULL,     
    product_id INT NOT NULL,         
    quantity INT NOT NULL,          
    unit_price DECIMAL(10, 2) NOT NULL,  
    FOREIGN KEY (purchase_id) REFERENCES purchases(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO clients (name, email, birthDate, age) VALUES ('Test Client', 'test@example.com', '2000-01-01', 24);

ALTER TABLE products ADD COLUMN quantity INT NOT NULL DEFAULT 0;


