const pool = require('../db');  // Importing the database connection

// Create Product
exports.createProduct = async (data) => {
    const { name, price } = data;
    // Query to insert a new product into the 'products' table
    const query = "INSERT INTO products (name, price) VALUES (?, ?)";
    // Using the 'execute' method to run the query with the provided parameters
    const [result] = await pool.execute(query, [name, price]);  // Using execute without .promise()
    return result;  // Return the result of the operation (the created product)
};

// Update Product
exports.updateProduct = async (id, data) => {
    const { name, price } = data;
    // Query to update an existing product's information
    const query = "UPDATE products SET name = ?, price = ? WHERE id = ?";
    // Using the 'execute' method to run the query with the provided parameters
    const [result] = await pool.execute(query, [name, price, id]);  // Using execute without .promise()
    return result;  // Return the result of the operation (the updated product)
};

// Delete Product
exports.deleteProduct = async (id) => {
    // Query to delete a product from the 'products' table
    const query = "DELETE FROM products WHERE id = ?";
    // Using the 'execute' method to run the query with the product ID to be deleted
    const [result] = await pool.execute(query, [id]);  // Using execute without .promise()
    return result;  // Return the result of the operation (the deleted product)
};

// Get Products
exports.getProducts = async () => {
    // Query to select all products from the 'products' table
    const query = "SELECT * FROM products";
    try {
        // Using the 'execute' method to run the query and get the results
        const [products] = await pool.execute(query);  // Using execute without .promise()
        return products;  // Return all the found products
    } catch (error) {
        console.error("Error fetching products:", error);  // Log the error if it occurs
        throw error;  // Pass the error to the controller for handling
    }
};
