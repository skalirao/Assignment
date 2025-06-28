// Product Catalog - Complete Solution

// Product object constructor
function createProduct(id, name, price, stock, categories) {
    return { 
        id, 
        name, 
        price, 
        stock, 
        categories: Array.isArray(categories) ? categories : [categories]
    };
}

// Initialize product catalog array
let catalog = [
    createProduct(1, "Laptop", 1000, 5, ["electronics", "computers"]),
    createProduct(2, "Phone", 500, 0, ["electronics", "mobile"]),
    createProduct(3, "Book", 20, 10, ["books", "education"]),
    createProduct(4, "Headphones", 150, 8, ["electronics", "audio"]),
    createProduct(5, "Tablet", 300, 2, ["electronics", "mobile"])
];

// Add a new product to the catalog
function addProduct(catalog, product) {
    // Check if product with same ID already exists
    if (catalog.find(p => p.id === product.id)) {
        console.log(`Product with ID ${product.id} already exists`);
        return false;
    }
    
    catalog.push(product);
    console.log(`Product "${product.name}" added successfully`);
    return true;
}

// Find a product by id
function findProductById(catalog, id) {
    const product = catalog.find(product => product.id === id);
    if (product) {
        console.log(`Found product: ${product.name} (ID: ${product.id})`);
        return product;
    } else {
        console.log(`Product with ID ${id} not found`);
        return null;
    }
}

// Update product stock by id
function updateStock(catalog, id, newStock) {
    const product = findProductById(catalog, id);
    if (product) {
        const oldStock = product.stock;
        product.stock = newStock;
        console.log(`Stock updated for "${product.name}": ${oldStock} → ${newStock}`);
        return true;
    }
    return false;
}

// Filter products by category
function filterByCategory(catalog, category) {
    const filtered = catalog.filter(product => product.categories.includes(category));
    console.log(`Found ${filtered.length} products in category "${category}":`);
    filtered.forEach(product => {
        console.log(`  - ${product.name} ($${product.price})`);
    });
    return filtered;
}

// Calculate total inventory value
function totalInventoryValue(catalog) {
    const total = catalog.reduce((sum, product) => sum + (product.price * product.stock), 0);
    console.log(`Total inventory value: $${total.toFixed(2)}`);
    return total;
}

// List all out-of-stock products
function outOfStockProducts(catalog) {
    const outOfStock = catalog.filter(product => product.stock === 0);
    console.log(`Found ${outOfStock.length} out-of-stock products:`);
    outOfStock.forEach(product => {
        console.log(`  - ${product.name} (ID: ${product.id})`);
    });
    return outOfStock;
}

// Additional utility functions

// Get products with low stock (below threshold)
function getLowStockProducts(catalog, threshold = 3) {
    const lowStock = catalog.filter(product => product.stock > 0 && product.stock <= threshold);
    console.log(`Found ${lowStock.length} products with low stock (≤${threshold}):`);
    lowStock.forEach(product => {
        console.log(`  - ${product.name}: ${product.stock} units`);
    });
    return lowStock;
}

// Search products by name (case-insensitive)
function searchProductsByName(catalog, searchTerm) {
    const term = searchTerm.toLowerCase();
    const results = catalog.filter(product => 
        product.name.toLowerCase().includes(term)
    );
    console.log(`Found ${results.length} products matching "${searchTerm}":`);
    results.forEach(product => {
        console.log(`  - ${product.name} ($${product.price})`);
    });
    return results;
}

// Get products in price range
function getProductsInPriceRange(catalog, minPrice, maxPrice) {
    const inRange = catalog.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
    );
    console.log(`Found ${inRange.length} products between $${minPrice} and $${maxPrice}:`);
    inRange.forEach(product => {
        console.log(`  - ${product.name}: $${product.price}`);
    });
    return inRange;
}

// Remove product from catalog
function removeProduct(catalog, id) {
    const index = catalog.findIndex(product => product.id === id);
    if (index !== -1) {
        const removed = catalog.splice(index, 1)[0];
        console.log(`Product "${removed.name}" removed from catalog`);
        return true;
    } else {
        console.log(`Product with ID ${id} not found`);
        return false;
    }
}

// Display catalog summary
function displayCatalogSummary(catalog) {
    console.log("\n=== Product Catalog Summary ===");
    console.log(`Total products: ${catalog.length}`);
    console.log(`Total inventory value: $${totalInventoryValue(catalog)}`);
    console.log(`Out of stock: ${outOfStockProducts(catalog).length}`);
    console.log(`Low stock (≤3): ${getLowStockProducts(catalog).length}`);
    console.log("===============================\n");
}

// Example usage and testing
console.log("=== Product Catalog Demo ===\n");

// Display initial catalog summary
displayCatalogSummary(catalog);

// Test all functions
console.log("--- Testing Core Functions ---");

// Add a new product
addProduct(catalog, createProduct(6, "Mouse", 25, 15, ["electronics", "computers"]));

// Find product by ID
findProductById(catalog, 2);
findProductById(catalog, 999); // Non-existent

// Update stock
updateStock(catalog, 2, 3);
updateStock(catalog, 1, 0);

// Filter by category
filterByCategory(catalog, "electronics");
filterByCategory(catalog, "books");

// Calculate total value
totalInventoryValue(catalog);

// Find out of stock products
outOfStockProducts(catalog);

console.log("\n--- Testing Additional Functions ---");

// Search by name
searchProductsByName(catalog, "lap");

// Get products in price range
getProductsInPriceRange(catalog, 100, 500);

// Get low stock products
getLowStockProducts(catalog, 5);

// Remove a product
removeProduct(catalog, 3);

// Display final summary
displayCatalogSummary(catalog); 