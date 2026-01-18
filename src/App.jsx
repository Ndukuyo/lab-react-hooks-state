import React, { useState } from 'react';
import './App.css';
import DarkModeToggle from './components/DarkModeToggle';
import ProductList from './components/ProductList';
import CategoryFilter from './components/CategoryFilter';
import Cart from './components/Cart';

function App() {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);
  
  // State for cart items - stores product names
  const [cart, setCart] = useState([]);
  
  // State for category filter
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Function to add item to cart
  const addToCart = (itemName) => {
    // Add the item name to the cart array
    setCart([...cart, itemName]);
  };
  
  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Sample product data
  const products = [
    { id: 1, name: 'Milk', category: 'Dairy' },
    { id: 2, name: 'Bread', category: 'Bakery' },
    { id: 3, name: 'Cheese', category: 'Dairy' },
    { id: 4, name: 'Apple', category: 'Fruits' },
    { id: 5, name: 'Banana', category: 'Fruits' },
    { id: 6, name: 'Orange Juice', category: 'Beverages' },
    { id: 7, name: 'Eggs', category: 'Dairy' },
    { id: 8, name: 'Carrots', category: 'Vegetables' }
  ];

  // Filter products by selected category
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="app-header">
        <h1>Grocery Shopping App</h1>
        <DarkModeToggle 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
        />
      </header>
      
      <main className="app-main">
        <div className="left-panel">
          {/* Category Filter Component */}
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onCategoryChange={handleCategoryChange} 
          />
          
          {/* Cart Component */}
          <Cart cartItems={cart} />
        </div>
        
        <div className="right-panel">
          {/* Product List Component */}
          <h2>Products ({filteredProducts.length})</h2>
          <ProductList 
            products={filteredProducts} 
            addToCart={addToCart} 
          />
        </div>
      </main>
    </div>
  );
}

export default App;