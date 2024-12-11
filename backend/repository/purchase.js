const pool = require('../db');  // Importing the database connection

// Create Purchase
exports.createPurchase = async (data) => {
    const { customer_id, product_id, quantity, total } = data;
    // Query to insert a new purchase into the 'purchases' table
    const query = "INSERT INTO purchases (customer_id, product_id, quantity, total) VALUES (?, ?, ?, ?)";
    // Using the 'execute' method to run the query with the provided parameters
    const [result] = await pool.execute(query, [customer_id, product_id, quantity, total]);
    return result;  // Return the result of the operation (the created purchase)
};

// Update Purchase
exports.updatePurchase = async (id, data) => {
    const { customer_id, product_id, quantity, total } = data;
    // Query to update an existing purchase's information
    const query = "UPDATE purchases SET customer_id = ?, product_id = ?, quantity = ?, total = ? WHERE id = ?";
    // Using the 'execute' method to run the query with the provided parameters
    const [result] = await pool.execute(query, [customer_id, product_id, quantity, total, id]);
    return result;  // Return the result of the operation (the updated purchase)
};

// Delete Purchase
exports.deletePurchase = async (id) => {
    // Query to delete a purchase from the 'purchases' table
    const query = "DELETE FROM purchases WHERE id = ?";
    // Using the 'execute' method to run the query with the purchase ID to be deleted
    const [result] = await pool.execute(query, [id]);
    return result;  // Return the result of the operation (the deleted purchase)
};

// Get Purchases
exports.getPurchases = async () => {
    // Query to select all purchases from the 'purchases' table
    const query = "SELECT * FROM purchases";
    // Using the 'execute' method to run the query and get the results
    const [purchases] = await pool.execute(query);
    return purchases;  // Return all the found purchases
};
